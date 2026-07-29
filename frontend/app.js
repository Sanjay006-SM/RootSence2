document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP & Animations
    if (typeof window.initAllAnimations === 'function') {
        window.initAllAnimations();
    }

    initMobileMenu();
    initToastContainer();

    let analysisRunCount = 0;

    // Helper to get element by primary or fallback ID
    function getEl(primaryId, fallbackId) {
        return document.getElementById(primaryId) || document.getElementById(fallbackId);
    }

    // ── Toast Notification System (Minimal Gray) ──
    function initToastContainer() {
        if (!document.getElementById('toast-container')) {
            const container = document.createElement('div');
            container.id = 'toast-container';
            container.setAttribute('aria-live', 'polite');
            container.setAttribute('aria-atomic', 'true');
            document.body.appendChild(container);
        }
    }

    window.showToast = function(message, type = 'info', duration = 4500) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.add('toast-out');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    };

    // ── Mobile Menu Toggle ──
    function initMobileMenu() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        const closeBtn = document.getElementById('mobile-menu-close');

        if (!toggle || !menu) return;

        function openMenu() {
            menu.classList.add('open');
            if (overlay) overlay.classList.add('open');
            toggle.setAttribute('aria-expanded', 'true');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            menu.classList.remove('open');
            if (overlay) overlay.classList.remove('open');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }

        toggle.addEventListener('click', openMenu);
        if (closeBtn) closeBtn.addEventListener('click', closeMenu);
        if (overlay) overlay.addEventListener('click', closeMenu);

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Incident Telemetry Sample Mapping
    const samples = {
        'db': "ERROR 1213 (40001): Deadlock found when trying to get lock; try restarting transaction in order-service",
        'network': "TimeoutError: Redis connection to redis-cluster.internal:6379 timed out after 3000ms. GET session:9842a2 in auth-service",
        'oom': "KubeletEvent: Pod payment-processor-79d5b88-x2k41 was OOMKilled (Exit Code 137). Memory limit of 512Mi exceeded.",
        'nonsense': "Traceback (most recent call last):\n  File \"flux_capacitor.py\", line 42, in time_travel\n    raise TemporalAnomaly('Cannot exceed 88 mph')\nTemporalAnomaly: Cannot exceed 88 mph",
        'webhook': "SentryAlert: Issue #942 - Exception in auth-service: RedisTimeoutError connection refused on port 6379"
    };

    // Initialize sample buttons
    function initSampleButtons() {
        const sampleButtons = document.querySelectorAll('.sample-btn');
        const incidentInput = getEl('incidentInput', 'incident-input');
        if (!sampleButtons.length) return;

        sampleButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();

                // Get the incident text from data attribute or fallback mapping
                const type = this.getAttribute('data-type');
                const incidentText = this.getAttribute('data-text') || (type ? samples[type] : '');

                if (incidentInput && incidentText) {
                    // Fill the textarea
                    incidentInput.value = incidentText;
                    incidentInput.classList.remove('input-error');

                    // Visual feedback: active state and brief ring-2 highlight
                    sampleButtons.forEach(b => {
                        b.classList.remove('active');
                        b.classList.remove('ring-2');
                    });
                    this.classList.add('active', 'ring-2');

                    setTimeout(() => {
                        this.classList.remove('ring-2');
                    }, 300);

                    // Auto-focus on textarea so user can see it's filled
                    incidentInput.focus();

                    // Scroll textarea into view smoothly
                    incidentInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    }

    initSampleButtons();

    // Fetch Dynamic Metrics for Landing Page & Dashboard
    async function loadStats() {
        try {
            const res = await fetch('/api/stats');
            const data = await res.json();
            
            const statTotalEl = getEl('statTotal', 'metric-kb-count');
            const statHoursEl = getEl('statHours', 'metric-hours-saved');
            
            if (statTotalEl) statTotalEl.innerText = `${data.total_incidents}`;
            if (statHoursEl) statHoursEl.innerText = `${data.estimated_hours_saved}h`;
        } catch (e) {
            console.error("Failed to load stats", e);
        }
    }
    loadStats();

    // Dashboard Analyze Button Logic
    const analyzeBtn = getEl('analyzeBtn', 'analyze-btn');
    let currentIncidentId = null;

    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', runAnalysis);

        const incidentInput = getEl('incidentInput', 'incident-input');
        if (incidentInput) {
            incidentInput.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    e.preventDefault();
                    runAnalysis();
                }
            });
        }
    }

    async function runAnalysis() {
        const analyzeBtn = getEl('analyzeBtn', 'analyze-btn');
        const input = getEl('incidentInput', 'incident-input');
        if (!analyzeBtn || analyzeBtn.disabled) return;

        const text = input ? input.value.trim() : '';
        if (!text) {
            if (input) {
                input.classList.add('input-error');
                input.focus();
                setTimeout(() => input.classList.remove('input-error'), 600);
            }
            showToast('Please paste an incident log or select a preset sample.', 'warning');
            return;
        }

        analyzeBtn.disabled = true;
        analyzeBtn.innerText = "Analyzing Incident...";

        const resultsSection = getEl('results', 'results-panel');
        const feedbackControls = document.getElementById('feedback-controls');
        if (resultsSection) {
            resultsSection.style.display = 'block';
            resultsSection.style.opacity = '0.5';
        }
        if (feedbackControls) feedbackControls.classList.add('hidden');
        resetAgents();
        showLoadingSkeleton();

        try {
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ raw_text: text })
            });
            const data = await response.json();

            await simulateAgentStep('ingestion', `Extracted: ${data.ingestion.extracted_service}`, 1);

            const matchCount = data.matcher.matches.length;
            await simulateAgentStep('matcher', `Matched ${matchCount} (${data.matcher.max_similarity}%)`, 2);

            await simulateAgentStep('diagnosis', `Confidence: ${data.diagnosis.confidence}`, 3);

            await simulateAgentStep('resolution', `Generated ${data.resolution.resolution_steps.length} steps`, 4);

            await simulateAgentStep('learning', `Feedback loop active`, 5);

            analysisRunCount++;
            const statRunsEl = document.getElementById('statRuns');
            if (statRunsEl) statRunsEl.innerText = `${analysisRunCount}`;

            populateResults(data);
            showToast('Analysis complete — root cause analysis ready.', 'success');

        } catch (err) {
            console.error("Pipeline Execution Error:", err);
            showToast('Analysis pipeline failed. Ensure backend server is active.', 'error', 6000);
            resetAgents();
        } finally {
            analyzeBtn.disabled = false;
            analyzeBtn.innerText = "Analyze Incident";
        }
    }

    // Step Simulator Helper (Black / Gray Aesthetic)
    async function simulateAgentStep(stepId, doneMsg, stepIndex) {
        return new Promise(resolve => {
            const el = document.getElementById(`step-${stepId}`);
            const statusEl = document.getElementById(`agent-${stepIndex}-status`) || (el ? el.querySelector('.agent-status') : null);
            const circleEl = el ? el.querySelector('.node-circle') : null;

            if (el && typeof gsap !== 'undefined') {
                gsap.to(el, {
                    borderColor: '#000000',
                    backgroundColor: '#F9FAFB',
                    duration: 0.3
                });
                if (circleEl) {
                    gsap.to(circleEl, {
                        borderColor: '#000000',
                        backgroundColor: '#F3F4F6',
                        color: '#000000',
                        duration: 0.3
                    });
                }
            }
            
            if (statusEl) {
                statusEl.innerText = 'Analyzing...';
                statusEl.className = 'text-xs text-black font-mono font-semibold mt-1 truncate px-1';
            }

            setTimeout(() => {
                if (el && typeof gsap !== 'undefined') {
                    gsap.to(el, {
                        borderColor: '#000000',
                        backgroundColor: '#FFFFFF',
                        duration: 0.3
                    });
                    if (circleEl) {
                        gsap.to(circleEl, {
                            borderColor: '#000000',
                            backgroundColor: '#000000',
                            color: '#FFFFFF',
                            duration: 0.3
                        });
                    }
                }

                if (statusEl) {
                    statusEl.innerText = doneMsg;
                    statusEl.className = 'text-xs text-gray-700 font-mono mt-1 truncate px-1';
                }

                resolve();
            }, 500);
        });
    }

    // Reset Agents Function
    function resetAgents() {
        ['ingestion', 'matcher', 'diagnosis', 'resolution', 'learning'].forEach((step, idx) => {
            const el = document.getElementById(`step-${step}`);
            const statusEl = document.getElementById(`agent-${idx+1}-status`) || (el ? el.querySelector('.agent-status') : null);
            const circleEl = el ? el.querySelector('.node-circle') : null;

            if (circleEl && typeof gsap !== 'undefined') {
                gsap.to(circleEl, {
                    borderColor: '#D1D5DB',
                    backgroundColor: '#F3F4F6',
                    color: '#111827',
                    duration: 0.2
                });
            }
            if (statusEl) {
                statusEl.innerText = 'Waiting...';
                statusEl.className = 'text-xs text-gray-500 font-mono mt-1 truncate px-1';
            }
        });
    }

    // Loading Skeleton Helpers
    function showLoadingSkeleton() {
        const synthText = getEl('diagnosisText', 'synthesis-text');
        const resList = getEl('stepsList', 'resolution-list');
        const matchContainer = getEl('matchList', 'matches-container');

        if (synthText) synthText.innerHTML = '<div class="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div><div class="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>';
        if (resList) resList.innerHTML = '<li class="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></li><li class="h-6 bg-gray-200 rounded w-5/6 mb-2 animate-pulse"></li>';
        if (matchContainer) matchContainer.innerHTML = '<div class="h-12 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>';
    }

    // Populate Results (Minimal Gray Badges)
    function populateResults(data) {
        const resultsSection = getEl('results', 'results-panel');
        if (resultsSection) {
            resultsSection.style.display = 'block';
            resultsSection.style.opacity = '1';
        }

        // Confidence Badge (All Gray, varying weights)
        const conf = (data.diagnosis.confidence || 'medium').toLowerCase();
        const badge = getEl('confidenceBadge', 'confidence-badge');
        if (badge) {
            if (conf === 'high') {
                badge.innerText = "HIGH CONFIDENCE";
                badge.className = "px-3 py-1 bg-gray-100 text-gray-900 text-xs font-mono font-semibold rounded border border-gray-300";
            } else if (conf === 'medium') {
                badge.innerText = "MEDIUM CONFIDENCE";
                badge.className = "px-3 py-1 bg-gray-50 text-gray-700 text-xs font-mono border border-gray-200";
            } else {
                badge.innerText = "LOW CONFIDENCE";
                badge.className = "px-3 py-1 bg-white text-gray-500 text-xs font-mono border border-gray-300";
            }
        }

        // Root Cause Synthesis
        const synthText = getEl('diagnosisText', 'synthesis-text');
        if (synthText) {
            synthText.innerText = data.diagnosis.root_cause_synthesis;
        }

        // Action Plan
        const resList = getEl('stepsList', 'resolution-list');
        if (resList) {
            resList.innerHTML = '';
            data.resolution.resolution_steps.forEach((step, idx) => {
                const li = document.createElement('li');
                li.className = 'flex items-start gap-3 text-black text-base leading-relaxed';
                li.innerHTML = `<span class="flex-shrink-0 w-6 h-6 rounded bg-black text-white text-xs font-bold font-mono flex items-center justify-center mt-0.5">${idx+1}</span><span>${step}</span>`;
                resList.appendChild(li);
            });
        }

        // KB Matches (Minimal Gray Cards)
        const matchContainer = getEl('matchList', 'matches-container');
        if (matchContainer) {
            matchContainer.innerHTML = '';
            if (data.matcher.matches.length === 0) {
                matchContainer.innerHTML = '<div class="text-sm text-gray-500 italic">No matches found in knowledge base.</div>';
            } else {
                data.matcher.matches.forEach((m, idx) => {
                    const div = document.createElement('div');
                    div.className = 'p-4 rounded-lg bg-gray-50 border border-gray-200 flex justify-between items-center';
                    div.innerHTML = `
                        <div>
                            <div class="font-bold text-sm text-black">${m.title}</div>
                            <div class="text-xs text-gray-500 font-mono mt-0.5">ID: ${m.id} • ${m.service}</div>
                        </div>
                        <div class="text-xs font-mono font-bold text-black border border-gray-300 bg-white px-2.5 py-1 rounded">${m.similarity}% Match</div>
                    `;
                    matchContainer.appendChild(div);
                    
                    if (idx === 0) currentIncidentId = m.id;
                });
                
                const feedbackControls = document.getElementById('feedback-controls');
                if (feedbackControls && currentIncidentId) {
                    feedbackControls.classList.remove('hidden');
                }
            }
        }
    }

    // Feedback Handlers (fbUp / fbDown)
    const fbUp = document.getElementById('fbUp');
    const fbDown = document.getElementById('fbDown');
    const feedbackBtns = [fbUp, fbDown].filter(Boolean);

    feedbackBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            if (!currentIncidentId) return;
            
            const vote = e.currentTarget.getAttribute('data-vote') || (e.currentTarget.id === 'fbUp' ? 'up' : 'down');
            const feedbackControls = document.getElementById('feedback-controls');
            const learningStatus = document.getElementById('learning-status');
            
            if (feedbackControls) feedbackControls.classList.add('hidden');
            if (learningStatus) {
                learningStatus.classList.remove('hidden');
                learningStatus.classList.add('flex');
            }

            try {
                const res = await fetch('/api/feedback', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ incident_id: currentIncidentId, feedback: vote })
                });
                const data = await res.json();
                
                setTimeout(() => {
                    if (learningStatus) {
                        learningStatus.innerHTML = `<span class="text-black font-semibold text-xs">${data.message}</span>`;
                        
                        setTimeout(() => {
                            learningStatus.classList.add('hidden');
                            learningStatus.classList.remove('flex');
                            learningStatus.innerHTML = `<span>Learning Agent: Updating match priority weights...</span>`;
                        }, 4000);
                    }
                }, 600);
                
            } catch (err) {
                console.error("Feedback error:", err);
            }
        });
    });
});
