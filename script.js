// =============================================
//  ZenFit Pro – script.js  (lightweight enhancements)
// =============================================

// Smooth navbar active-link highlight on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((s) => observer.observe(s));

// Animate product cards into view
const cards = document.querySelectorAll('.product-card');
const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

cards.forEach((card) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  cardObserver.observe(card);
});

// "Buy on" button click tracking (console log for now)
document.querySelectorAll('.buy-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const platform = [...btn.classList].find((c) => c !== 'buy-btn');
    const product  = btn.closest('.product-info').querySelector('h3').textContent;
    console.log(`[ZenFit Pro] Redirecting to ${platform} for: ${product}`);
  });
});
