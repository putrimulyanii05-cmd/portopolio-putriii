const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  menuToggle.addEventListener('click', () => {
    const terbuka = navLinks.classList.toggle('terbuka');
    menuToggle.setAttribute('aria-expanded', terbuka);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('terbuka');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });