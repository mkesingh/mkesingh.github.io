// Simple interactivity: sidebar toggle and active link scrolling
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('menuToggle');
  const sidebar = document.querySelector('.sidebar');
  const links = document.querySelectorAll('.nav-link');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  menu && menu.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  // Smooth scrolling and active class
  links.forEach(l => {
    l.addEventListener('click', (e) => {
      links.forEach(x => x.classList.remove('active'));
      e.currentTarget.classList.add('active');
      sidebar.classList.remove('open');
      // smooth scroll
      const id = e.currentTarget.getAttribute('href');
      if (id && id.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });
});
