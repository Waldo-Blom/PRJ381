document.addEventListener('DOMContentLoaded', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    // Function to handle visibility of scroll indicator
    const handleScroll = () => {
        if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
            // Remove the element from accessibility tree when hidden
            scrollIndicator.setAttribute('aria-hidden', 'true');
        }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Also hide on click of the scroll indicator itself
    scrollIndicator.addEventListener('click', () => {
        scrollIndicator.style.opacity = '0';
        scrollIndicator.style.pointerEvents = 'none';
        scrollIndicator.setAttribute('aria-hidden', 'true');
    });
});