// Mobile menu toggling plus dynamic spacing so content never hides behind fixed nav
(function () {
    const root = document.documentElement;
    const nav = document.querySelector('nav');
    const toggleBtn = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (!nav || !toggleBtn || !menu) return;

    function setVar(name, value) {
        root.style.setProperty(name, value);
    }

    function updateNavHeight() {
        const h = nav.offsetHeight || 64; // px fallback
        setVar('--nav-height', h + 'px');
    }

    function updateMenuHeight() {
        // Height contributes only when menu is visible (not having Tailwind's `hidden`)
        const visible = !menu.classList.contains('hidden');
        const h = visible ? menu.scrollHeight || menu.offsetHeight || 0 : 0;
        setVar('--mobile-menu-height', (h || 0) + 'px');
    }

    // Initial measurements
    window.addEventListener('load', () => {
        updateNavHeight();
        updateMenuHeight();
    });
    document.addEventListener('DOMContentLoaded', () => {
        updateNavHeight();
        updateMenuHeight();
    });

    // Recompute on resize/orientation changes
    window.addEventListener('resize', () => {
        updateNavHeight();
        updateMenuHeight();
    });

    // Toggle handler
    toggleBtn.addEventListener('click', function () {
        menu.classList.toggle('hidden');
        // Allow reflow to compute height after visibility change
        requestAnimationFrame(() => {
            updateMenuHeight();
        });
    });

    // Optional UX: close menu after clicking a link (prevents permanent extra spacing)
    menu.querySelectorAll('a[href^="#"]').forEach((a) => {
        a.addEventListener('click', () => {
            if (!menu.classList.contains('hidden')) {
                menu.classList.add('hidden');
                requestAnimationFrame(() => {
                    updateMenuHeight();
                });
            }
        });
    });
})();
