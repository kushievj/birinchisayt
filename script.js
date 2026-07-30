// JS yoqilganini CSS ga bildiramiz (JS o'chiq bo'lsa sayt baribir to'liq ko'rinadi)
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {

  // Kunduzgi / tungi rejimni almashtirish (boshlang'ich holat theme.js da qo'yiladi)
  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('theme', next);
      } catch (e) {
        // Saqlab bo'lmasa ham rejim shu sahifada ishlayveradi
      }
    });
  }

  // Sahifa pastga surilganda navbar oq fonli bo'lib qoladi
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Footerdagi yilni avtomatik yangilash
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Sahifani aylantirganda bloklar yumshoq paydo bo'lishi
  var items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(function (el) { observer.observe(el); });
});
