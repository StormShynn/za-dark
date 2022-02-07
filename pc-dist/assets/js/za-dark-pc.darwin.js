/*
  ZaDark – Best Dark Theme for Zalo
  macOS
  Made by NCDAi Studio
*/

document.getElementsByTagName('head')[0].insertAdjacentHTML(
  'beforeend',
  `<style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&display=swap');</style>`
);
document.body.classList.add("za-dark", "za-dark-pc", "za-dark-darwin");
document.documentElement.setAttribute("data-theme", "dark");
