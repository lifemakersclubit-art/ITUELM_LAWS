// ===== PARTICLES =====
function initParticles() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const particleColor = isDark ? 'rgba(96, 165, 250, 0.3)' : 'rgba(255, 255, 255, 0.2)';

    function resize() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 2 + 1,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== THEME TOGGLE =====
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateThemeIcon(next);
    });
}

function updateThemeIcon(theme) {
    const toggle = document.getElementById('themeToggle');
    toggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
}

// ===== SIDEBAR =====
function initSidebar() {
    const nav = document.getElementById('sidebarNav');
    let currentSection = 'عام';

    navItems.forEach(item => {
        if (item.section !== currentSection) {
            currentSection = item.section;
            nav.insertAdjacentHTML('beforeend', 
                `<div class="nav-divider"></div><div class="nav-section-label">${item.section}</div>`
            );
        }
        const numHtml = item.num ? `<span class="nav-number">${item.num}</span>` : '';
        nav.insertAdjacentHTML('beforeend', 
            `<button class="nav-item ${item.id === 'overview' ? 'active' : ''}" data-target="${item.id}">
                <i class="fas ${item.icon}"></i>
                <span>${item.label}</span>
                ${numHtml}
            </button>`
        );
    });

    nav.querySelectorAll('.nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            scrollToSection(target);
            if (window.innerWidth <= 1024) closeSidebar();
        });
    });
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ===== MOBILE SIDEBAR =====
function initMobileSidebar() {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', closeSidebar);
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('active');
}

// ===== SEARCH =====
function initSearch() {
    const trigger = document.getElementById('searchTrigger');
    const overlay = document.getElementById('searchOverlay');
    const closeBtn = document.getElementById('searchClose');
    const input = document.getElementById('searchInput');
    const results = document.getElementById('searchResults');

    function openSearch() {
        overlay.classList.add('active');
        setTimeout(() => input.focus(), 100);
    }

    function closeSearch() {
        overlay.classList.remove('active');
        input.value = '';
        results.innerHTML = '';
    }

    trigger.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            overlay.classList.contains('active') ? closeSearch() : openSearch();
        }
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeSearch();
        }
    });

    input.addEventListener('input', () => {
        const query = input.value.trim().toLowerCase();
        if (!query) {
            results.innerHTML = '';
            return;
        }

        const filtered = searchData.filter(item => 
            item.title.toLowerCase().includes(query) || 
            item.preview.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            results.innerHTML = '<div class="search-no-results"><i class="fas fa-search" style="font-size:2rem;margin-bottom:12px;display:block;"></i>لا توجد نتائج مطابقة</div>';
            return;
        }

        results.innerHTML = filtered.map(item => `
            <div class="search-result-item" data-target="${item.id}">
                <div class="search-result-title">${item.title}</div>
                <div class="search-result-preview">${item.preview}</div>
                <span class="search-result-badge" style="background:${item.badgeColor}20;color:${item.badgeColor};">${item.badge}</span>
            </div>
        `).join('');

        results.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const target = item.getAttribute('data-target');
                closeSearch();
                scrollToSection(target);
            });
        });
    });
}

// ===== RENDER CONTENT =====
function renderContent() {
    const main = document.getElementById('mainContent');
    const order = ['overview', 'door1', 'door2', 'door3', 'door4', 'door5', 'door6', 
                   'door7', 'door8', 'door9', 'door10', 'door11', 'door12', 
                   'door13', 'door14', 'door15', 'door16'];

    order.forEach(key => {
        if (sectionsContent[key]) {
            main.insertAdjacentHTML('beforeend', 
                `<section class="section reveal" id="${key}">${sectionsContent[key]}</section>`
            );
        }
    });
}

// ===== SCROLL REVEAL =====
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ===== ACTIVE NAV ON SCROLL =====
function initActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(btn => btn.classList.remove('active'));
                const target = entry.target.id;
                const activeBtn = document.querySelector(`.nav-item[data-target="${target}"]`);
                if (activeBtn) activeBtn.classList.add('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
}

// ===== KPI ANIMATION =====
function initKPIAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.kpi-bar-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => fill.style.width = width, 100);
                });
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.kpi-card').forEach(card => observer.observe(card));
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSidebar();
    initMobileSidebar();
    initSearch();
    renderContent();
    initParticles();

    setTimeout(() => {
        initScrollReveal();
        initActiveNav();
        initKPIAnimation();
    }, 100);
});
