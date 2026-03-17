// Shared nav + footer injection
function getActivePage() {
  const path = window.location.pathname.split('/').pop().replace('.html','') || 'index';
  return path;
}

function injectNav(isDark = false) {
  const page = getActivePage();
  const darkClass = isDark ? 'dark-nav' : '';
  document.getElementById('nav-placeholder').innerHTML = `
  <nav id="mainNav" class="${darkClass}" role="navigation" aria-label="Main navigation">
    <a href="/" class="nav-logo" aria-label="Willow Foods home">
      <img src="WFlogo.svg" alt="Willow Foods" class="nav-logo-img">
    </a>
    <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" id="menuToggle">
      <span></span><span></span><span></span>
    </button>
    <ul class="nav-links" id="navLinks">
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
  document.getElementById('menuToggle').addEventListener('click', function() {
    const links = document.getElementById('navLinks');
    const isOpen = links.classList.toggle('open');
    this.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen);
    nav.classList.toggle('menu-open', isOpen);
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
        <div class="footer-contact-item">
          <span class="icon"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="1" y="3" width="14" height="10" rx="1.5"/><path d="M1 4.5l7 5 7-5"/></svg></span>
          <span>hello@willowfoods.co</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 1.5h2.5l1 3-1.5 1a9 9 0 004.5 4.5l1-1.5 3 1V12A1.5 1.5 0 0112 13.5C5.9 13.5 2.5 7.6 2.5 4A1.5 1.5 0 013 1.5z"/></svg></span>
          <span>+94 76 984 3232</span>
        </div>
        <div class="footer-contact-item">
          <span class="icon"><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5A4.5 4.5 0 0112.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 018 1.5z"/><circle cx="8" cy="6" r="1.5"/></svg></span>
          <span>Colombo, Sri Lanka</span>
        </div>
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
