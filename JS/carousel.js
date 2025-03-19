document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const slideIds = ['slide1', 'slide2', 'slide3', 'slide4'];
    let currentIndex = 0;
    let autoplayInterval;
    
    // Function to show specific slide by ID
    function showSlideById(slideId) {
      const index = slideIds.indexOf(slideId);
      if (index !== -1) {
        showSlide(index);
      }
    }
    
    // Function to show a specific slide by index
    function showSlide(index) {
      // Hide all slides
      carouselItems.forEach(item => {
        item.classList.remove('active');
      });
      
      // Show the selected slide
      carouselItems[index].classList.add('active');
      
      currentIndex = index;
    }
    
    // Set up arrow button click events
    const prevButtons = document.querySelectorAll('.carousel-prev');
    const nextButtons = document.querySelectorAll('.carousel-next');
    
    prevButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSlide = button.getAttribute('data-target');
        showSlideById(targetSlide);
        resetAutoplay();
      });
    });
    
    nextButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSlide = button.getAttribute('data-target');
        showSlideById(targetSlide);
        resetAutoplay();
      });
    });
    
    // // Autoplay function
    // function startAutoplay() {
    //   autoplayInterval = setInterval(() => {
    //     currentIndex = (currentIndex + 1) % carouselItems.length;
    //     showSlide(currentIndex);
    //   }, 5000); // Change slide every 5 seconds
    // }
    
    // Reset autoplay
    function resetAutoplay() {
      clearInterval(autoplayInterval);
      startAutoplay();
    }
    
    // Initialize carousel
    showSlide(0); // Show first slide
    startAutoplay(); // Start autoplay
    
    // Pause autoplay on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      startAutoplay();
    });
  });