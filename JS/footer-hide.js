// Safely bind events and keep controls mobile-only
(() => {
    const seeMoreBtn = document.querySelector('.see-more');
    const hideNamesBtn = document.querySelector('.hide-names');
    const secondGroupWrapper = document.querySelector('.second-group-wrapper');

    if (!seeMoreBtn || !hideNamesBtn || !secondGroupWrapper) return;

    const isMobile = () => window.matchMedia('(max-width: 767px)').matches; // Tailwind md breakpoint

    // Ensure correct initial visibility based on viewport
        const applyResponsiveVisibility = () => {
        if (isMobile()) {
            // On mobile: see-more visible initially, hide-names hidden
                seeMoreBtn.classList.remove('hidden');
                hideNamesBtn.classList.add('hidden');
                secondGroupWrapper.classList.add('hidden');
        } else {
            // On md and up: controls should be hidden, wrapper visible (managed by HTML classes)
            seeMoreBtn.classList.add('hidden');
            hideNamesBtn.classList.add('hidden');
                secondGroupWrapper.classList.remove('hidden');
        }
    };

    applyResponsiveVisibility();
    window.addEventListener('resize', applyResponsiveVisibility);

        seeMoreBtn.addEventListener('click', () => {
        if (!isMobile()) return;
        secondGroupWrapper.classList.remove('hidden');
        seeMoreBtn.classList.add('hidden');
        hideNamesBtn.classList.remove('hidden');

            // Ensure hide-names is at the end of the names list when shown
            const group = secondGroupWrapper.querySelector('.name-group');
            if (group && hideNamesBtn.parentElement !== group) {
                group.appendChild(hideNamesBtn);
            }
    });

    hideNamesBtn.addEventListener('click', () => {
        if (!isMobile()) return;
        secondGroupWrapper.classList.add('hidden');
        seeMoreBtn.classList.remove('hidden');
        hideNamesBtn.classList.add('hidden');
    });
})();