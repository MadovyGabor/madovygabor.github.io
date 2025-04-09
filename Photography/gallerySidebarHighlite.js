const carousel = document.querySelector('.carousel');
const firstImg = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.gallery-wrapper i'); 

arrowIcons.forEach(icon => { 
    icon.addEventListener("click", () => {
        // Dynamically calculate the image width (including margin)
        const firstImgWidth = firstImg.clientWidth + parseInt(getComputedStyle(firstImg).marginRight);

        // Adjust scroll position based on the arrow clicked
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;

        // Snap to the nearest image
        setTimeout(() => {
            const scrollLeft = carousel.scrollLeft;
            const remainder = scrollLeft % firstImgWidth;

            if (remainder !== 0) {
                // Determine the scroll direction and adjust accordingly
                if (icon.id === "right") {
                    carousel.scrollLeft += firstImgWidth - remainder; // Snap forward
                } else {
                    carousel.scrollLeft -= remainder; // Snap backward
                }
            }
        }, 100); // Delay to allow smooth scrolling
    });
});
