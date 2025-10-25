document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggle = document.querySelector('.github-dropdown-toggle');
    const dropdownMenu = document.querySelector('.github-dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
        // Handle aria-expanded attribute on hover
        dropdownToggle.parentElement.addEventListener('mouseenter', () => {
            dropdownToggle.setAttribute('aria-expanded', 'true');
        });
        
        dropdownToggle.parentElement.addEventListener('mouseleave', () => {
            dropdownToggle.setAttribute('aria-expanded', 'false');
        });
    }

    // Handle mobile GitHub dropdown
    const mobileGithubToggle = document.getElementById('mobile-github-toggle');
    const mobileGithubMenu = document.getElementById('mobile-github-menu');

    if (mobileGithubToggle && mobileGithubMenu) {
        mobileGithubToggle.addEventListener('click', () => {
            mobileGithubMenu.classList.toggle('hidden');
        });
    }
});