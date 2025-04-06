document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img.lazy-img');
  const options = {
    root: null,
    // Preload 200px before entering viewport
    rootMargin: '0px 0px 200px 0px',
    threshold: 0 
  };

  const loadImage = img => {
    const src = img.getAttribute('data-src');
    if (!src) return;
    img.src = src;
    img.classList.remove('skeleton');
    img.classList.remove('lazy-img');
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, options);

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});
