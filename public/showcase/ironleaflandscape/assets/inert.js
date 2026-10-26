// assets/inert.js — navigation belongs to the widget, not the page.
addEventListener('click', (e) => {
  const el = e.target.closest('a, button, [type=submit]');
  if (el) e.preventDefault();
});
addEventListener('submit', (e) => e.preventDefault());
