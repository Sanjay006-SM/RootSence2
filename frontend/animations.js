/**
 * RootSense - GSAP Animation & Magnetic Cursor Controller
 * Premium Interactive Micro-Interactions & Scroll Effects
 */

// Register GSAP ScrollTrigger if loaded
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

// Global Mouse Tracking
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Update custom cursor circle position if present
    const customCursor = document.getElementById('custom-cursor');
    if (customCursor && window.innerWidth >= 768) {
        gsap.to(customCursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.15,
            ease: "power2.out"
        });
    }
});

/**
 * 1. Initialize Standard Glowing Ring Custom Cursor
 */
function initCustomCursor() {
    if (window.innerWidth < 768) return; // Skip mobile

    // Remove ribbon canvas if present
    const ribbonCanvas = document.getElementById('ribbon-cursor-canvas');
    if (ribbonCanvas) ribbonCanvas.remove();

    let cursor = document.getElementById('custom-cursor');
    if (!cursor) {
        cursor = document.createElement('div');
        cursor.id = 'custom-cursor';
        cursor.className = 'fixed top-0 left-0 w-8 h-8 rounded-full border border-primaryBlue/60 bg-primaryBlue/10 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out blur-[1px] shadow-[0_0_15px_rgba(79,140,255,0.4)]';
        document.body.appendChild(cursor);
    }
}

/**
 * 2. Apply Subtle Magnetic Pull Effect to Interactive Elements
 */
function applyMagneticEffect(selectorOrElements) {
    if (window.innerWidth < 768 || typeof gsap === 'undefined') return;

    const elements = typeof selectorOrElements === 'string' 
        ? document.querySelectorAll(selectorOrElements) 
        : selectorOrElements;

    elements.forEach(element => {
        if (!element || element.dataset.magneticInit) return;
        element.dataset.magneticInit = "true";

        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            // Calculate distance offset (subtle 6-12px pull)
            const deltaX = (e.clientX - centerX) * 0.18;
            const deltaY = (e.clientY - centerY) * 0.18;

            gsap.to(element, {
                duration: 0.3,
                x: deltaX,
                y: deltaY,
                rotateX: -deltaY * 0.2,
                rotateY: deltaX * 0.2,
                ease: "power2.out"
            });

            // Expand custom cursor on hover
            const customCursor = document.getElementById('custom-cursor');
            if (customCursor) {
                gsap.to(customCursor, {
                    scale: 1.6,
                    borderColor: '#38BDF8',
                    backgroundColor: 'rgba(56, 189, 248, 0.15)',
                    duration: 0.2
                });
            }
        });

        element.addEventListener('mouseleave', () => {
            gsap.to(element, {
                duration: 0.6,
                x: 0,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                ease: "elastic.out(1, 0.4)"
            });

            // Shrink custom cursor back
            const customCursor = document.getElementById('custom-cursor');
            if (customCursor) {
                gsap.to(customCursor, {
                    scale: 1,
                    borderColor: 'rgba(79, 140, 255, 0.6)',
                    backgroundColor: 'rgba(79, 140, 255, 0.1)',
                    duration: 0.3
                });
            }
        });
    });
}

/**
 * 3. Setup ScrollTrigger Reveal Animations (Guaranteed Visibility, No Hidden Blank Space)
 */
function setupScrollAnimations() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Features Section Bento Cards
    const featuresSec = document.getElementById('features');
    const featureCards = gsap.utils.toArray('#features .feature-card');
    
    if (featuresSec && featureCards.length > 0) {
        // Check if section is already in viewport (e.g. #features hash URL navigation)
        const rect = featuresSec.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            gsap.to(featureCards, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power3.out',
                clearProps: 'opacity,transform'
            });
        } else {
            gsap.fromTo(featureCards, 
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power3.out',
                    clearProps: 'opacity,transform',
                    scrollTrigger: {
                        trigger: featuresSec,
                        start: 'top 95%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        }
    }

    // Architecture / How It Works Step Cards
    const architectureSec = document.getElementById('architecture') || document.getElementById('how-it-works');
    const agentStepCards = gsap.utils.toArray('#architecture .rounded-xl, #how-it-works .rounded-xl');
    if (architectureSec && agentStepCards.length > 0) {
        gsap.fromTo(agentStepCards, 
            { opacity: 0, y: 25 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                clearProps: 'opacity,transform',
                scrollTrigger: {
                    trigger: architectureSec,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Tech Stack Badges
    const techStackSec = document.getElementById('tech-stack');
    const techBadges = gsap.utils.toArray('#tech-stack .rounded-lg, #tech-stack span');
    if (techStackSec && techBadges.length > 0) {
        gsap.fromTo(techBadges, 
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                stagger: 0.06,
                ease: 'power2.out',
                clearProps: 'opacity,transform',
                scrollTrigger: {
                    trigger: techStackSec,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }

    // Refresh ScrollTrigger to sync accurate offset positions
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);
}

/**
 * 4. Setup Parallax Depth Effects
 */
function setupParallax() {
    if (window.innerWidth < 768 || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Background Gradient Bulbs Parallax
    const bgGlows = gsap.utils.toArray('.fixed.blur-\\[128px\\]');
    bgGlows.forEach((glow, idx) => {
        gsap.to(glow, {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            },
            y: (idx + 1) * 120,
            ease: 'none'
        });
    });

    // Hero Section Subtle Floating Depth
    const heroRightCard = document.querySelector('.lg\\:col-span-5');
    if (heroRightCard) {
        gsap.to(heroRightCard, {
            scrollTrigger: {
                trigger: 'body',
                start: 'top top',
                end: 'bottom top',
                scrub: 0.5
            },
            y: 40,
            ease: 'none'
        });
    }
}

/**
 * 5. Single Master GSAP Timeline for Hero Section (Strictly Single Execution, No Race Conditions)
 */
let heroTimelineInitialized = false;

function initHeroMasterTimeline() {
    if (heroTimelineInitialized) return;
    heroTimelineInitialized = true;

    if (typeof gsap === 'undefined') {
        document.querySelectorAll('.hero-title-word').forEach(w => {
            w.style.opacity = '1';
            w.style.filter = 'none';
        });
        return;
    }

    const masterTl = gsap.timeline({
        defaults: { ease: 'power3.out' }
    });

    // 1. Badge Fade & Slide Down
    const badge = document.querySelector('section > div > div.inline-flex');
    if (badge) {
        masterTl.fromTo(badge, 
            { opacity: 0, y: -15 }, 
            { opacity: 1, y: 0, duration: 0.5 }
        );
    }

    // 2. Hero Title Staggered Reveal (Sharp, high-contrast text rendering)
    const words = document.querySelectorAll('.hero-title-word');
    if (words.length > 0) {
        masterTl.fromTo(words, 
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, clearProps: 'opacity,transform' },
            "-=0.2"
        );
    }

    // 3. Hero Subtitle Paragraph
    const subtitle = document.querySelector('section > div > p');
    if (subtitle) {
        masterTl.fromTo(subtitle, 
            { opacity: 0, y: 15 }, 
            { opacity: 1, y: 0, duration: 0.5 }, 
            "-=0.3"
        );
    }

    // 4. Hero CTA Buttons
    const ctaButtons = document.querySelectorAll('section > div > div.flex-wrap > a');
    if (ctaButtons.length > 0) {
        masterTl.fromTo(ctaButtons, 
            { opacity: 0, y: 15, scale: 0.95 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1 }, 
            "-=0.3"
        );
    }

    // 5. Right-side Agent Node Sequence Card Container
    const heroRightCard = document.querySelector('section .lg\\:col-span-5');
    if (heroRightCard) {
        masterTl.fromTo(heroRightCard, 
            { opacity: 0, x: 30, scale: 0.98 }, 
            { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: 'back.out(1.2)' }, 
            "-=0.4"
        );
    }

    // 6. Background Ambient Glow Bulbs Depth Scale
    const bgGlows = document.querySelectorAll('.fixed.blur-\\[128px\\]');
    if (bgGlows.length > 0) {
        masterTl.fromTo(bgGlows, 
            { opacity: 0, scale: 0.8 }, 
            { opacity: 1, scale: 1, duration: 1.2, stagger: 0.15 }, 
            "-=0.6"
        );
    }
}


/**
 * 6. Swiss Style Clean Background (Particle loop disabled for paper-white theme)
 */
function initSparklesBackground() {
    return;
}

/**
 * 7. Count-Up Animation for Metrics
 */
function initCountUpMetrics() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    const metrics = [
        { id: 'metric-kb-count', target: 9, suffix: ' Incidents' },
        { id: 'metric-hours-saved', target: 22.5, suffix: ' Hours', decimals: 1 }
    ];

    metrics.forEach(m => {
        const el = document.getElementById(m.id);
        if (!el) return;

        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: m.target,
                    duration: 1.5,
                    ease: 'power2.out',
                    onUpdate: () => {
                        const formatted = m.decimals ? obj.val.toFixed(m.decimals) : Math.floor(obj.val);
                        el.textContent = `${formatted}${m.suffix}`;
                    }
                });
            },
            once: true
        });
    });
}

/**
 * 8. Interactive Service Selection Pills
 */
function initServicePills() {
    const pills = document.querySelectorAll('.pill');
    const feedbackText = document.getElementById('service-message');
    if (!pills.length || !feedbackText) return;
    
    const serviceDescriptions = {
        database: "Database incidents: Connection pools, deadlocks, timeouts",
        network: "Network issues: Timeouts, 502 errors, connectivity",
        memory: "Memory problems: OOMKilled, heap exhaustion, leaks",
        deployment: "Deployment failures: Rollbacks, config mismatches",
        application: "Application errors: NullPointers, race conditions"
    };
    
    pills.forEach(pill => {
        pill.addEventListener('click', function() {
            // Remove active from all
            pills.forEach(p => p.classList.remove('active'));
            
            // Add active to clicked
            this.classList.add('active');
            
            // Update feedback text with animation
            const service = this.dataset.service;
            if (typeof gsap !== 'undefined') {
                gsap.to(feedbackText, {
                    duration: 0.3,
                    opacity: 0,
                    onComplete: () => {
                        feedbackText.textContent = serviceDescriptions[service] || "";
                        gsap.to(feedbackText, { duration: 0.3, opacity: 1 });
                    }
                });
                
                // Magnetic effect on pill
                gsap.to(this, {
                    duration: 0.4,
                    scale: 1.1,
                    ease: "back.out(1.7)",
                    onComplete: () => {
                        gsap.to(this, { duration: 0.3, scale: 1 });
                    }
                });
            } else {
                feedbackText.textContent = serviceDescriptions[service] || "";
            }
        });
    });
}

/**
 * 9. Variable Font Weight Hover By Letter (GSAP Spring Physics & Variable Font Morph Engine)
 */
function initWeightHoverByLetter(selector = '.weight-hover-text') {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach(element => {
        if (element.dataset.weightHoverInit) return;
        element.dataset.weightHoverInit = "true";

        const text = element.textContent.trim();
        if (!text) return;

        element.style.display = 'inline-block';
        element.style.cursor = 'pointer';

        // Preserve accessibility with sr-only span
        const srOnly = document.createElement('span');
        srOnly.className = 'sr-only';
        srOnly.textContent = text;

        element.innerHTML = '';
        element.appendChild(srOnly);

        const letters = [];
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const span = document.createElement('span');
            span.className = 'weight-hover-letter';
            span.setAttribute('aria-hidden', 'true');
            span.textContent = char;
            
            if (char === ' ') {
                span.style.width = '0.3em';
            } else {
                // Per-letter micro spring swell on direct mouse proximity
                span.addEventListener('mouseenter', () => {
                    if (typeof gsap !== 'undefined') {
                        gsap.to(span, {
                            fontVariationSettings: "'wght' 900",
                            scale: 1.08,
                            y: -2,
                            color: '#2563EB',
                            duration: 0.3,
                            ease: "back.out(2)",
                            overwrite: 'auto'
                        });
                    }
                });
                span.addEventListener('mouseleave', () => {
                    if (typeof gsap !== 'undefined') {
                        gsap.to(span, {
                            fontVariationSettings: "'wght' 600",
                            scale: 1,
                            y: 0,
                            color: '#111827',
                            duration: 0.4,
                            ease: "power2.out",
                            overwrite: 'auto'
                        });
                    }
                });
            }
            element.appendChild(span);
            letters.push(span);
        }

        const validLetters = letters.filter(l => l.textContent !== ' ');

        // Container-level staggered wave reveal on hover
        element.addEventListener('mouseenter', () => {
            if (typeof gsap !== 'undefined' && validLetters.length > 0) {
                gsap.to(validLetters, {
                    fontVariationSettings: "'wght' 900",
                    scale: 1.05,
                    duration: 0.4,
                    stagger: {
                        each: 0.02,
                        from: "start"
                    },
                    ease: "back.out(1.7)",
                    overwrite: 'auto'
                });
            }
        });

        element.addEventListener('mouseleave', () => {
            if (typeof gsap !== 'undefined' && validLetters.length > 0) {
                gsap.to(validLetters, {
                    fontVariationSettings: "'wght' 600",
                    scale: 1,
                    y: 0,
                    color: '#111827',
                    duration: 0.4,
                    stagger: {
                        each: 0.015,
                        from: "end"
                    },
                    ease: "power2.out",
                    overwrite: 'auto'
                });
            }
        });
    });
}

/**
 * Master Initialization
 */
let masterInitExecuted = false;

function initAllAnimations() {
    if (masterInitExecuted) return;
    masterInitExecuted = true;

    initCustomCursor();
    initHeroMasterTimeline();
    initSparklesBackground();
    initCountUpMetrics();
    initServicePills();
    initWeightHoverByLetter();
    
    // Attach Magnetic Effect to buttons, cards, pills, logo, and links
    applyMagneticEffect('a, button, .pill, .sample-btn, #features .rounded-2xl, #how-it-works .rounded-2xl, .hero-agent-card');
    
    setupScrollAnimations();
    setupParallax();
}

// Auto Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    initAllAnimations();
});

// Export for module or global use
window.initAllAnimations = initAllAnimations;
window.applyMagneticEffect = applyMagneticEffect;
window.initHeroMasterTimeline = initHeroMasterTimeline;
window.initServicePills = initServicePills;



