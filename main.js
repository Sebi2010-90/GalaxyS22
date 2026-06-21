/* ============================================
   ACCORDION CARDS
   ============================================ */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    const isOpen = card.classList.contains('open');

    // Close all cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));

    // Open clicked card if it was closed
    if (!isOpen) card.classList.add('open');
  });
});

/* ============================================
   SCROLL FADE-IN ANIMATION
   ============================================ */
const animatedEls = [
  ...document.querySelectorAll('.card'),
  ...document.querySelectorAll('.cam-card'),
  ...document.querySelectorAll('.spec-group'),
  ...document.querySelectorAll('.section-title'),
  ...document.querySelectorAll('.nightography-box'),
];

animatedEls.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger effect
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

animatedEls.forEach(el => observer.observe(el));

/* ============================================
   NAV ACTIVE STATE ON SCROLL
   ============================================ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--white)'
          : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => sectionObserver.observe(s));

/* ============================================
   OPEN FIRST CARD BY DEFAULT
   ============================================ */
const firstCard = document.querySelector('.card');
if (firstCard) firstCard.classList.add('open');
