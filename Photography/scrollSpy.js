document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('p[id]');
  const sidebarLinks = document.querySelectorAll('.sidebarList a, .mobileMenu a');

  function onScroll() {
    let currentSection = '';
    sections.forEach(section => {
      // Adjust offset (e.g., 100px) as needed so section near top gets active
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop <= 100) {
        currentSection = section.getAttribute('id');
      }
    });

    sidebarLinks.forEach(link => {
      link.classList.remove('activeSection');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('activeSection');
      }
    });
  }

  window.addEventListener('scroll', onScroll);
  onScroll(); // initial check
});
