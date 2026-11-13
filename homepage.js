// All links remain usable without JavaScript.
const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
const sections = links.map(link => document.getElementById(link.hash.slice(1))).filter(Boolean);
if ('IntersectionObserver' in window) {
  const visible = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target));
    const active = sections.find(section => visible.has(section));
    if (!active) return;
    links.forEach(link => {
      if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, { rootMargin: '-100px 0px -40% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
