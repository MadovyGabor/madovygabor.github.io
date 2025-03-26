document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.galleryImage');
    let currentIndex = 1; // Start with the middle image

    function updateGallery() {
        images.forEach((img, index) => {
            img.classList.remove('middle');
            if (index === currentIndex) {
                img.classList.add('middle');
            }
        });
    }

    function moveLeft() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateGallery();
    }

    function moveRight() {
        currentIndex = (currentIndex + 1) % images.length;
        updateGallery();
    }

    // Attach event listeners to the arrow buttons
    document.querySelector('.left-arrow').addEventListener('click', moveLeft);
    document.querySelector('.right-arrow').addEventListener('click', moveRight);
});
