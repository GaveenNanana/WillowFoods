// Shared nav + footer injection
function getActivePage() {
  const path = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  return path;
}

function injectNav(isDark = false) {
  const page = getActivePage();
  const darkClass = isDark ? 'dark-nav' : '';
  document.getElementById('nav-placeholder').innerHTML = `
  <nav id="mainNav" class="${darkClass}">
    <a href="/" class="nav-logo">
      <img src="WFlogo.svg" alt="Willow Foods" class="nav-logo-img">
    </a>
    <button class="nav-hamburger" onclick="document.getElementById('mainNav').classList.toggle('nav-open')" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links">
      <li><a href="/products" ${page==='products'||page.includes('product-')?'class="active"':''}>Products</a></li>
      <li><a href="/services" ${page==='services'?'class="active"':''}>Services</a></li>
      <li><a href="/about" ${page==='about'?'class="active"':''}>About Us</a></li>
      <li><a href="/contact" class="btn-nav">Talk to Us</a></li>
    </ul>
  </nav>`;
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function injectMarquee() {
  const items = ['Ceylon Cinnamon','Black Pepper','White Pepper','Direct Sourcing','Private Labeling','Bulk Export','50+ Countries'];
  let html = '';
  for(let i=0;i<2;i++) items.forEach(t => {
    html += `<div class="marquee-item"><span>${t}</span><div class="marquee-dot"></div></div>`;
  });
  document.getElementById('marquee-placeholder').innerHTML = `<div class="marquee-strip"><div class="marquee-track">${html}</div></div>`;
}

function injectFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
  <footer>
    <div class="footer-grid">
      <div>
        <a href="/" class="footer-logo">
          <img src="WFlogo.svg" alt="Willow Foods" class="footer-logo-img">
        </a>
        <p class="footer-tagline">Bringing the authentic flavors of Sri Lanka to the world through premium quality spices and exceptional service.</p>
      </div>
      <div>
        <div class="footer-col-title">Quick Links</div>
        <ul class="footer-links">
          <li><a href="/products">Our Products</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Contact Us</div>
        <div class="footer-contact-item"><span class="icon">✉</span><span>hello@willowfoods.co</span></div>
        <div class="footer-contact-item"><span class="icon">☏</span><span>+94 76 984 3232</span></div>
        <div class="footer-contact-item"><span class="icon">◎</span><span>Colombo, Sri Lanka</span></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Willow Foods. All rights reserved.</span>
      <span>Pure Ceylon · Direct from Source</span>
    </div>
  </footer>`;
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);} });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}
