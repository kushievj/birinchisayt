// Mavzuni sahifa chizilishidan OLDIN qo'yadi — shuning uchun <head> ichida turadi.
// Aks holda sayt bir lahza oq bo'lib "miltillab" ketadi.
(function () {
  var theme = null;

  try {
    theme = localStorage.getItem('theme');
  } catch (e) {
    // Brauzer localStorage'ni taqiqlagan bo'lsa — e'tibor bermaymiz
  }

  if (theme !== 'dark' && theme !== 'light') {
    var prefersDark = window.matchMedia &&
                      window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme = prefersDark ? 'dark' : 'light';
  }

  document.documentElement.setAttribute('data-theme', theme);
})();
