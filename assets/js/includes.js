/* =========================================
   SYSTEM INCLUDES (HEADER, FOOTER & CONTACT)
   FOR: SIDHANTA ROUL (BUSINESS PROFILE)
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {
    
    // --- 1. GENERATE SYSTEM HEADER ---
    const headerElement = document.getElementById("header-include");
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="glass-nav-wrapper">
                <nav class="glass-nav">
                    <div class="nav-container">
                        <a href="index.html" class="logo">SID<span style="color:var(--accent);">HANTA</span></a>
                        
                        <ul class="nav-links">
                            <li><a href="index.html">HOME</a></li>
                            <li><a href="team.html">TEAM</a></li>
                            <li><a href="services.html">SOLUTIONS</a></li> 
                            <li><a href="projects.html">CASE STUDIES</a></li>
                            <li><a href="gallery.html">GALLERY</a></li>
                        </ul>

                        <div class="header-actions">
                            <button class="btn-neon desktop-only" onclick="openContactModal()">GET IN TOUCH</button>
                            
                            <div class="hamburger" onclick="toggleMenu()">
                                <i class="fas fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </nav>

                <div class="mobile-menu-overlay" id="mobileMenu">
                    <span class="close-btn" onclick="toggleMenu()">&times;</span>
                    <div class="mobile-links-container">
                        <a href="index.html" onclick="toggleMenu()">HOME</a>
                        <a href="team.html" onclick="toggleMenu()">TEAM</a>
                        <a href="services.html" onclick="toggleMenu()">SOLUTIONS</a> 
                        <a href="projects.html" onclick="toggleMenu()">CASE STUDIES</a>
                        <a href="gallery.html" onclick="toggleMenu()">GALLERY</a>
                        <a href="#" onclick="openContactModal(); toggleMenu()" style="color:var(--accent);">BOOK CALL</a>
                    </div>
                </div>
            </header>
        `;
    }

    // --- 2. GENERATE SYSTEM FOOTER (UPDATED TITLE) ---
    const footerElement = document.getElementById("footer-include");
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="system-footer">
                <div class="container footer-grid">
                    
                    <div class="footer-brand">
                        <h2 class="logo" style="font-size: 1.5rem;">SR<span style="color:var(--accent);">_AGENCY</span></h2>
                        <p style="color: #666; margin-top: 15px; font-size: 0.9rem;">
                            <span style="height:8px; width:8px; background:var(--accent); border-radius:50%; display:inline-block; margin-right:5px; box-shadow:0 0 5px var(--accent);"></span>
                            OPEN FOR BUSINESS
                        </p>
                    </div>

                    <div class="footer-contact">
                        <h3 class="footer-heading">CONTACT INFO</h3>
                        <div class="link-group">
                            <a href="mailto:sidhantaroul67@gmail.com"><i class="fas fa-envelope"></i> SEND EMAIL</a>
                            <a href="https://wa.me/919658060664" target="_blank"><i class="fab fa-whatsapp"></i> WHATSAPP</a>
                            <a href="team.html"><i class="fas fa-users"></i> MEET THE TEAM</a>
                        </div>
                    </div>

                    <div class="footer-log">
                        <h3 class="footer-heading">LEGAL & CREDITS</h3>
                        <p style="color:#888; font-size: 0.85rem; line-height: 1.6;">
                            &copy; 2026 SIDHANTA ROUL<br>
                            FULL STACK AI ARCHITECT // MBA<br>
                            BHUBANESWAR, INDIA
                        </p>
                        <p style="margin-top:10px; font-size: 0.8rem; color:#555;">
                            Tech Architecture by <a href="https://roshan-panday.github.io/portfolio-website/" target="_blank" style="color:var(--accent); text-decoration:none; font-weight:bold;">RP_DEV</a>
                        </p>
                    </div>

                </div>
            </footer>
        `;
    }

    // --- 3. INJECT CONTACT MODAL ---
    const contactModalHTML = `
        <div id="contactModal" class="contact-modal-overlay">
            <div class="contact-box">
                <span class="close-contact" onclick="closeContactModal()">&times;</span>
                <h2 style="color:white; margin-bottom:10px;">BOOK <span style="color:var(--accent);">CONSULTATION</span></h2>
                <p style="color:#888; font-size:0.9rem; margin-bottom:30px;">LET'S DISCUSS YOUR PROJECT</p>

                <div class="contact-grid">
                    <div class="contact-item" onclick="copyToClipboard('sidhantaroul67@gmail.com', 'email-status')">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <h4>EMAIL</h4>
                            <p>sidhantaroul67@gmail.com</p>
                            <span id="email-status" class="copy-status">CLICK TO COPY</span>
                        </div>
                    </div>

                    <div class="contact-item" onclick="copyToClipboard('+919658060664', 'phone-status')">
                        <i class="fas fa-phone-alt"></i>
                        <div>
                            <h4>PHONE</h4>
                            <p>+91 96580 60664</p>
                            <span id="phone-status" class="copy-status">CLICK TO COPY</span>
                        </div>
                    </div>

                    <div class="contact-item no-hover">
                        <i class="fas fa-map-marker-alt" style="color:var(--accent);"></i>
                        <div>
                            <h4>LOCATION</h4>
                            <p>Bhubaneswar, India</p>
                        </div>
                    </div>
                </div>

                <div class="social-row">
                    <a href="https://wa.me/919658060664" target="_blank"><i class="fab fa-whatsapp" style="color:#25D366;"></i></a>
                    <a href="mailto:sidhantaroul67@gmail.com"><i class="fas fa-envelope" style="color:#fff;"></i></a>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', contactModalHTML);

    // --- 4. HIGHLIGHT ACTIVE LINK (Robust Logic) ---
    const currentPath = window.location.pathname.split("/").pop();
    const activePage = currentPath === "" ? "index.html" : currentPath; // Handle root domain
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === activePage) {
            link.classList.add('active');
            link.style.color = "var(--accent)";
            link.style.textShadow = "0 0 10px var(--accent)";
        }
    });
});

/* =========================================
   HELPER FUNCTIONS
   ========================================= */

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    } else {
        menu.style.display = 'flex';
        menu.style.flexDirection = 'column';
        menu.style.justifyContent = 'center';
        menu.style.alignItems = 'center';
        document.body.style.overflow = 'hidden'; // Lock scrolling
    }
}

function openContactModal() {
    document.getElementById("contactModal").style.display = "flex";
    document.body.style.overflow = "hidden"; 
}

function closeContactModal() {
    document.getElementById("contactModal").style.display = "none";
    document.body.style.overflow = "auto"; 
}

function copyToClipboard(text, statusId) {
    navigator.clipboard.writeText(text).then(() => {
        const status = document.getElementById(statusId);
        status.innerText = "COPIED!";
        status.style.color = "var(--accent)";
        setTimeout(() => {
            status.innerText = "CLICK TO COPY";
            status.style.color = "#666";
        }, 2000);
    });
}
