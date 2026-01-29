/* =========================================
   1. SYSTEM INITIALIZATION & GLITCH TYPING
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    
    // A. Initialize Scroll Animations (AOS)
    if(typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            duration: 1000,
            offset: 100
        });
    }

    // B. Glitch Typing Effect (UPDATED FOR BUSINESS PROFILE)
    if(document.querySelector('.auto-type')) {
        new Typed(".auto-type", {
            strings: [
                "Business Strategist", 
                "Project Manager", 
                "Digital Consultant",
                "Client Success Lead"
            ],
            typeSpeed: 60,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });
    }

    // C. Start Neural Background
    initNeuralNetwork();
});

/* =========================================
   2. HUD NUMBER COUNTERS (NO CHANGES NEEDED)
   ========================================= */
const counters = document.querySelectorAll('.counter');
if(counters.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                const target = +entry.target.getAttribute('data-target');
                
                const count = () => {
                    const current = +entry.target.innerText;
                    const increment = target / 50;

                    if(current < target) {
                        entry.target.innerText = Math.ceil(current + increment);
                        setTimeout(count, 30);
                    } else {
                        entry.target.innerText = target + (target < 100 ? "+" : "");
                    }
                };
                count();
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => countObserver.observe(c));
}

/* =========================================
   3. IMAGE ZOOM MODAL (NO CHANGES NEEDED)
   ========================================= */
let currentWidthPercent = 90; 

function openModal(src, captionText) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const caption = document.getElementById("caption");
    
    if(modal && modalImg) {
        modal.style.display = "flex"; 
        modalImg.src = src;
        if(caption) caption.innerHTML = captionText || "";
        resetZoom();
        document.body.style.overflow = "hidden"; 
    }
}

function zoomIn() {
    const img = document.getElementById("img01");
    if(!img) return;
    img.style.maxHeight = "none";
    if(currentWidthPercent < 200) { 
        currentWidthPercent += 20;
        img.style.width = currentWidthPercent + "%";
        img.style.maxWidth = "none"; 
    }
}

function zoomOut() {
    const img = document.getElementById("img01");
    if(!img) return;
    if(currentWidthPercent > 40) { 
        currentWidthPercent -= 20;
        img.style.width = currentWidthPercent + "%";
    }
}

function resetZoom() {
    const img = document.getElementById("img01");
    if(!img) return;
    currentWidthPercent = 90; 
    img.style.width = "auto";
    img.style.maxWidth = "90%";
    img.style.maxHeight = "60vh"; 
}

function closeModal(event) {
    if (event) {
        if (event.target.closest('#img01') || 
            event.target.closest('#caption') || 
            event.target.closest('.zoom-controls')) {
            return; 
        }
    }
    const modal = document.getElementById("imageModal");
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

/* =========================================
   4. PROJECT DETAIL PANEL (UPDATED BUTTONS)
   ========================================= */

function openProjectPanel(title, subtitle, challenge, solution, features, link) {
    const overlay = document.getElementById('projectPanelOverlay');
    if(!overlay) return; 
    
    document.getElementById('pp-title').innerText = title;
    document.getElementById('pp-subtitle').innerText = subtitle;
    document.getElementById('pp-challenge').innerText = challenge;
    document.getElementById('pp-solution').innerText = solution;
    
    const featureList = document.getElementById('pp-features');
    featureList.innerHTML = ""; 
    if(Array.isArray(features)) {
        features.forEach(f => {
            let li = document.createElement('li');
            li.innerText = f;
            featureList.appendChild(li);
        });
    }

    const btn = document.getElementById('pp-link');
    if(link && link.length > 0) {
        btn.style.display = "inline-flex"; 
        btn.href = link;
        
        // LOGIC UPDATE: Marketing guys usually don't have GitHub links.
        // This makes sure the button looks right for standard websites.
        if(link.includes("github")) {
            btn.innerHTML = '<i class="fab fa-github" style="margin-right:8px;"></i> VIEW SOURCE';
        } else if(link.includes("youtube")) {
            btn.innerHTML = '<i class="fab fa-youtube" style="margin-right:8px;"></i> WATCH VIDEO';
        } else if(link.includes("wa.me")) {
            btn.innerHTML = '<i class="fab fa-whatsapp" style="margin-right:8px;"></i> CHAT NOW';
        } else {
            btn.innerHTML = '<i class="fas fa-external-link-alt" style="margin-right:8px;"></i> VISIT SITE';
        }
    } else {
        btn.style.display = "none";
    }

    overlay.style.display = "flex";
    document.body.style.overflow = "hidden"; 
}

function closeProjectPanel() {
    const overlay = document.getElementById('projectPanelOverlay');
    if(overlay) {
        overlay.style.display = "none";
        document.body.style.overflow = "auto"; 
    }
}

/* =========================================
   5. NEURAL PARTICLE NETWORK (UPDATED TO GOLD)
   ========================================= */
function initNeuralNetwork() {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const particleCount = window.innerWidth < 768 ? 35 : 60; 
    const connectionDistance = window.innerWidth < 768 ? 100 : 150;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5; 
            this.vy = (Math.random() - 0.5) * 0.5; 
            this.size = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            // COLOR UPDATE: Changed from Cyan to Gold/Orange
            ctx.fillStyle = 'rgba(255, 180, 0, 0.7)'; 
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();

            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < connectionDistance) {
                    ctx.beginPath();
                    // COLOR UPDATE: Lines match the Gold theme
                    ctx.strokeStyle = `rgba(255, 180, 0, ${1 - distance / connectionDistance})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}