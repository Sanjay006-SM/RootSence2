document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP & Animations
    if (typeof window.initAllAnimations === 'function') {
        window.initAllAnimations();
    }

    initMobileMenu();
    initToastContainer();

    let analysisRunCount = 0;
    let currentIncidentId = null;
    let currentMatchConfidence = null;

    // Single source of truth for the 11-agent pipeline: order, label, and the
    // one-line description shown while each agent is actively running.
    const AGENT_PIPELINE = [
        { id: 'ingestion',    label: 'Ingestion',              description: 'Extracting structured incident metadata...' },
        { id: 'correlation',  label: 'Correlation',            description: 'Checking whether this belongs to an existing incident...' },
        { id: 'matcher',      label: 'Matcher',                description: 'Searching historical incidents...' },
        { id: 'diagnosis',    label: 'Diagnosis',              description: 'Determining probable root cause...' },
        { id: 'verification', label: 'Diagnosis Verification', description: 'Validating diagnosis confidence...' },
        { id: 'impact',       label: 'Impact & Blast Radius',  description: 'Estimating affected services...' },
        { id: 'severity',     label: 'Severity',               description: 'Calculating incident priority...' },
        { id: 'resolution',   label: 'Resolution',             description: 'Generating recovery actions...' },
        { id: 'escalation',   label: 'Escalation',             description: 'Selecting the responsible response team...' },
        { id: 'learning',     label: 'Learning',               description: 'Processing engineer feedback...' },
        { id: 'curation',     label: 'Knowledge Curation',     description: 'Preparing reusable organizational knowledge...' }
    ];
    const TOTAL_AGENTS = AGENT_PIPELINE.length;
    let completedAgentCount = 0;

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

    // ── Per-Agent Execution Detail Cards (expandable, built once from AGENT_PIPELINE) ──
    function initAgentDetailsPanel() {
        const list = document.getElementById('agentDetailsList');
        if (!list) return;

        list.innerHTML = AGENT_PIPELINE.map(agent => `
            <details class="group px-6 py-3" id="detail-${agent.id}">
                <summary class="flex items-center justify-between cursor-pointer list-none select-none">
                    <div class="flex items-center gap-3">
                        <span class="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0" id="detail-dot-${agent.id}"></span>
                        <span class="text-sm font-semibold text-black">${agent.label}</span>
                    </div>
                    <div class="flex items-center gap-3">
                        <span class="text-xs font-mono text-gray-500" id="detail-status-${agent.id}">Waiting...</span>
                        <i data-lucide="chevron-down" class="w-4 h-4 text-gray-400 transition-transform group-open:rotate-180"></i>
                    </div>
                </summary>
                <div class="mt-3 pl-5 text-xs font-mono text-gray-700 space-y-1" id="detail-body-${agent.id}">
                    <span class="text-gray-400 italic">No output yet — run an analysis to populate this card.</span>
                </div>
            </details>
        `).join('');

        if (window.lucide) lucide.createIcons();
    }
    initAgentDetailsPanel();

    // ── Client-side Log File Upload (.txt only) ──
    function initFileUploadHandler() {
        const uploadBtn = document.getElementById('uploadFileBtn');
        const fileInput = document.getElementById('logFileInput');
        const incidentInput = getEl('incidentInput', 'incident-input');
        const statusBanner = document.getElementById('fileUploadStatus');
        const fileNameEl = document.getElementById('uploadedFileName');
        const fileSizeEl = document.getElementById('uploadedFileSize');
        const clearBtn = document.getElementById('clearFileBtn');
        const analyzeBtn = getEl('analyzeBtn', 'analyze-btn');

        if (!uploadBtn || !fileInput || !incidentInput) return;

        // Trigger file select dialog
        uploadBtn.addEventListener('click', () => {
            fileInput.value = '';
            fileInput.click();
        });

        // File select change handler
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                processSelectedFile(file);
            }
        });

        // Clear uploaded file indicator
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (statusBanner) statusBanner.classList.add('hidden');
                fileInput.value = '';
            });
        }

        // Drag and Drop on Textarea
        ['dragenter', 'dragover'].forEach(eventName => {
            incidentInput.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                incidentInput.classList.add('border-black', 'bg-gray-50');
            });
        });

        ['dragleave', 'drop'].forEach(eventName => {
            incidentInput.addEventListener(eventName, (e) => {
                e.preventDefault();
                e.stopPropagation();
                incidentInput.classList.remove('border-black', 'bg-gray-50');
            });
        });

        incidentInput.addEventListener('drop', (e) => {
            const file = e.dataTransfer.files[0];
            if (file) {
                processSelectedFile(file);
            }
        });

        function processSelectedFile(file) {
            // 1. File Type Check (.txt only)
            const fileName = file.name.toLowerCase();
            const isTxtExt = fileName.endsWith('.txt');
            const isTxtType = file.type === 'text/plain' || file.type === '';

            if (!isTxtExt && !isTxtType) {
                showToast(`Invalid file format "${file.name}" — only .txt log files are supported.`, 'warning');
                return;
            }

            // 2. Size Limit Check (Max 1MB)
            const MAX_SIZE_BYTES = 1 * 1024 * 1024; // 1MB
            if (file.size > MAX_SIZE_BYTES) {
                const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
                showToast(`File too large (${sizeMB}MB) — please upload a log under 1MB.`, 'warning');
                return;
            }

            // 3. Read File Contents
            const reader = new FileReader();
            reader.onload = (e) => {
                const textContent = e.target.result;

                // Empty file check
                if (!textContent || !textContent.trim()) {
                    showToast(`File "${file.name}" is empty or contains whitespace only.`, 'warning');
                    return;
                }

                // Populate textarea (overwrite existing text)
                incidentInput.value = textContent;
                incidentInput.classList.remove('input-error');

                // Display file confirmation indicator
                if (fileNameEl) fileNameEl.innerText = `Loaded: ${file.name}`;
                if (fileSizeEl) fileSizeEl.innerText = `(${(file.size / 1024).toFixed(1)} KB)`;
                if (statusBanner) statusBanner.classList.remove('hidden');

                // Deselect preset sample buttons
                document.querySelectorAll('.sample-btn').forEach(b => b.classList.remove('active', 'ring-2'));

                showToast(`Loaded log file "${file.name}"`, 'success');

                // Focus analyze button and scroll into view
                if (analyzeBtn) {
                    analyzeBtn.focus();
                    analyzeBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };

            reader.onerror = () => {
                showToast(`Failed to read file "${file.name}".`, 'error');
            };

            reader.readAsText(file);
        }
    }

    initFileUploadHandler();

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

            await simulateAgentStep('ingestion', `Extracted: ${data.ingestion.extracted_service}`, 1, data.ingestion);

            if (data.correlation) {
                await simulateAgentStep('correlation', data.correlation.is_duplicate ? `Duplicate of ${data.correlation.incident_id}` : `New incident ${data.correlation.incident_id}`, 2, data.correlation);
            }

            const matchCount = data.matcher.matches.length;
            await simulateAgentStep('matcher', `Matched ${matchCount} (${data.matcher.max_similarity}%)`, 3, data.matcher);

            await simulateAgentStep('diagnosis', `Confidence: ${data.diagnosis.confidence}`, 4, data.diagnosis);

            if (data.verification) {
                await simulateAgentStep('verification', data.verification.verification_status, 5, data.verification);
            }

            if (data.impact) {
                await simulateAgentStep('impact', `${data.impact.estimated_impact_level} (${data.impact.affected_services.length} services)`, 6, data.impact);
            }

            if (data.severity) {
                await simulateAgentStep('severity', `${data.severity.priority} (${data.severity.severity})`, 7, data.severity);
            }

            await simulateAgentStep('resolution', `Generated ${data.resolution.resolution_steps.length} steps`, 8, data.resolution);

            if (data.escalation) {
                await simulateAgentStep('escalation', data.escalation.escalate ? `Escalated ${data.escalation.channel}` : `Routed ${data.escalation.channel}`, 9, data.escalation);
            }

            await simulateAgentStep('learning', `Feedback loop active`, 10, { status: 'idle', note: 'Activates once engineer feedback is submitted below.' });
            await simulateAgentStep('curation', `Awaiting engineer feedback`, 11, { status: 'idle', note: 'Drafts a KB entry suggestion once feedback is submitted, if applicable.' });

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

    // Formats an agent's raw JSON output into readable key/value rows for its detail card.
    function renderAgentOutput(output) {
        if (!output || typeof output !== 'object') {
            return '<span class="text-gray-400 italic">No structured output returned.</span>';
        }

        const rows = Object.entries(output)
            .filter(([key]) => key !== 'raw_text') // avoid duplicating the full input log inline
            .map(([key, value]) => {
                let displayValue;
                if (Array.isArray(value)) {
                    displayValue = value.length ? value.join(', ') : '—';
                } else if (value && typeof value === 'object') {
                    displayValue = JSON.stringify(value);
                } else if (value === null || value === undefined || value === '') {
                    displayValue = '—';
                } else {
                    displayValue = String(value);
                }
                return `<div class="flex justify-between gap-4 py-1 border-b border-gray-100 last:border-0">
                    <span class="text-gray-500 flex-shrink-0">${key}</span>
                    <span class="text-black text-right break-words">${displayValue}</span>
                </div>`;
            });

        return rows.length ? rows.join('') : '<span class="text-gray-400 italic">No structured output returned.</span>';
    }

    // Updates the "Completed Agents: X / 11" progress indicator with a subtle pulse.
    function updateProgressIndicator(count) {
        const progressEl = document.getElementById('pipelineProgressText');
        if (!progressEl) return;
        progressEl.innerText = `Completed Agents: ${count} / ${TOTAL_AGENTS}`;
        if (typeof gsap !== 'undefined') {
            gsap.fromTo(progressEl, { opacity: 0.4, y: -2 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power1.out' });
        }
    }

    // Step Simulator Helper (Black / Gray Aesthetic)
    async function simulateAgentStep(stepId, doneMsg, stepIndex, outputData) {
        return new Promise(resolve => {
            const meta = AGENT_PIPELINE.find(a => a.id === stepId);
            const runningMsg = meta ? meta.description : 'Analyzing...';

            const el = document.getElementById(`step-${stepId}`);
            const statusEl = document.getElementById(`agent-${stepIndex}-status`) || (el ? el.querySelector('.agent-status') : null);
            const circleEl = el ? el.querySelector('.node-circle') : null;

            const detailStatusEl = document.getElementById(`detail-status-${stepId}`);
            const detailDotEl = document.getElementById(`detail-dot-${stepId}`);
            const detailBodyEl = document.getElementById(`detail-body-${stepId}`);

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

            // One-line running description under the pipeline node, e.g. "Determining probable root cause..."
            if (statusEl) {
                statusEl.innerText = runningMsg;
                statusEl.className = 'text-xs text-black font-mono font-semibold mt-1 truncate px-1';
            }
            if (detailStatusEl) detailStatusEl.innerText = 'Running...';
            if (detailDotEl) {
                detailDotEl.className = 'w-2 h-2 rounded-full bg-gray-500 flex-shrink-0 animate-pulse';
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

                if (detailStatusEl) detailStatusEl.innerText = 'Completed';
                if (detailDotEl) detailDotEl.className = 'w-2 h-2 rounded-full bg-black flex-shrink-0';
                if (detailBodyEl) {
                    detailBodyEl.innerHTML = renderAgentOutput(outputData);
                    if (typeof gsap !== 'undefined') {
                        gsap.fromTo(detailBodyEl, { opacity: 0 }, { opacity: 1, duration: 0.3 });
                    }
                }

                completedAgentCount++;
                updateProgressIndicator(completedAgentCount);

                resolve();
            }, 400);
        });
    }

    // Reset Agents Function
    function resetAgents() {
        completedAgentCount = 0;
        updateProgressIndicator(0);

        AGENT_PIPELINE.forEach((agent, idx) => {
            const el = document.getElementById(`step-${agent.id}`);
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

            const detailStatusEl = document.getElementById(`detail-status-${agent.id}`);
            const detailDotEl = document.getElementById(`detail-dot-${agent.id}`);
            const detailBodyEl = document.getElementById(`detail-body-${agent.id}`);
            if (detailStatusEl) detailStatusEl.innerText = 'Waiting...';
            if (detailDotEl) detailDotEl.className = 'w-2 h-2 rounded-full bg-gray-300 flex-shrink-0';
            if (detailBodyEl) detailBodyEl.innerHTML = '<span class="text-gray-400 italic">No output yet — run an analysis to populate this card.</span>';
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

        // Severity & Escalation Summary
        if (data.severity) {
            const sevBadge = document.getElementById('severityBadge');
            const sevScoreText = document.getElementById('severityScoreText');
            if (sevBadge) sevBadge.innerText = `${data.severity.priority} — ${data.severity.severity.toUpperCase()}`;
            if (sevScoreText) sevScoreText.innerText = `Composite Score: ${data.severity.score}/14`;
        }

        if (data.escalation) {
            const escBadge = document.getElementById('escalationStatusBadge');
            const escChannelText = document.getElementById('escalationChannelText');
            const escMsgText = document.getElementById('escalationMessageText');

            if (escBadge) {
                escBadge.innerText = data.escalation.escalate ? "ESCALATED (P1/P2)" : "ROUTED (STANDARD)";
                escBadge.className = data.escalation.escalate
                    ? "px-2.5 py-0.5 bg-black text-white text-xs font-mono font-bold rounded"
                    : "px-2.5 py-0.5 bg-gray-100 text-black text-xs font-mono font-semibold rounded border border-gray-300";
            }
            if (escChannelText) escChannelText.innerText = `Target: ${data.escalation.channel} (${data.escalation.team})`;
            if (escMsgText) escMsgText.innerText = data.escalation.message;
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
                    
                    if (idx === 0) {
                        currentIncidentId = m.id;
                        currentMatchConfidence = m.similarity;
                    }
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
                    body: JSON.stringify({ incident_id: currentIncidentId, feedback: vote, match_confidence: currentMatchConfidence })
                });
                const data = await res.json();

                setTimeout(() => {
                    if (learningStatus) {
                        const curation = data.knowledge_curation_suggestion;
                        const curationNote = curation
                            ? ` <span class="text-gray-500">— KB draft suggested: "${curation.suggested_title}"</span>`
                            : '';
                        learningStatus.innerHTML = `<span class="text-black font-semibold text-xs">${data.message}</span>${curationNote}`;

                        setTimeout(() => {
                            learningStatus.classList.add('hidden');
                            learningStatus.classList.remove('flex');
                            learningStatus.innerHTML = `<span>Learning Agent: Updating match priority weights...</span>`;
                        }, 4000);
                    }

                    // Reflect the real feedback outcome in the Learning / Knowledge Curation detail cards
                    const learningBody = document.getElementById('detail-body-learning');
                    if (learningBody) learningBody.innerHTML = renderAgentOutput({ status: data.status, message: data.message });

                    const curationBody = document.getElementById('detail-body-curation');
                    if (curationBody) {
                        curationBody.innerHTML = data.knowledge_curation_suggestion
                            ? renderAgentOutput(data.knowledge_curation_suggestion)
                            : '<span class="text-gray-400 italic">No KB entry suggested for this feedback.</span>';
                    }
                }, 600);
                
            } catch (err) {
                console.error("Feedback error:", err);
            }
        });
    });
});
