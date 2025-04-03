// Gallery Slideshow Functionality

// Global variables
let currentIndex = 0;
const totalImages = document.querySelectorAll('.gallerySlideshow img').length;
let slideshowInterval;
const slideshowDelay = 5000; // Time between slides in milliseconds (5 seconds)

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state
    updateGallery();
    
    // Start automatic slideshow
    startSlideshow();
    
    // Pause slideshow when hovering over the gallery
    const galleryContainer = document.querySelector('.galleryPrevContainer');
    galleryContainer.addEventListener('mouseenter', pauseSlideshow);
    galleryContainer.addEventListener('mouseleave', startSlideshow);
});

// Move to the next or previous slide
function moveSlide(direction) {
    // Clear automatic slideshow when manually navigating
    pauseSlideshow();
    
    // Calculate new index
    currentIndex = (currentIndex + direction + totalImages) % totalImages;
    
    // Update the gallery
    updateGallery();
    
    // Restart automatic slideshow after a delay
    setTimeout(startSlideshow, 10000); // Restart after 10 seconds of inactivity
}

// Update the gallery display
function updateGallery() {
    const images = document.querySelectorAll('.gallerySlideshow img');
    
    // Hide all images first
    images.forEach(img => {
        img.classList.remove('middle');
        img.classList.add('hidden');
    });
    
    // Calculate indices for the three visible images
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    const nextIndex = (currentIndex + 1) % totalImages;
    
    // Show the three current images
    images[prevIndex].classList.remove('hidden');
    images[currentIndex].classList.remove('hidden');
    images[currentIndex].classList.add('middle');
    images[nextIndex].classList.remove('hidden');
}

// Start automatic slideshow
function startSlideshow() {
    // Clear any existing interval
    if (slideshowInterval) clearInterval(slideshowInterval);
    
    // Set new interval
    slideshowInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateGallery();
    }, slideshowDelay);
}

// Pause the automatic slideshow
function pauseSlideshow() {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
}
