// Hamburger toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav ul');
hamburger.addEventListener('click', () => { nav.classList.toggle('active'); });

// Sticky nav scroll highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav ul li a');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 60) { current = section.getAttribute('id'); } });
    navLinks.forEach(link => { link.classList.remove('active'); if (link.getAttribute('href') === '#' + current) { link.classList.add('active'); } });
});

// Back-to-top button
const backToTop = document.createElement('button');
backToTop.innerText = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);
backToTop.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
window.addEventListener('scroll', () => { backToTop.style.display = window.scrollY > 300 ? 'block' : 'none'; });

// Scroll reveal using IntersectionObserver
const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('show'); } }) });
document.querySelectorAll('section, .project-card').forEach(el => observer.observe(el));

// Bubble trail cursor
document.body.style.cursor = 'none';
const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);
const bubbles = Array.from({ length: 8 }, () => { const b = document.createElement('div'); b.className = 'bubble'; document.body.appendChild(b); return b; });
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px'; });
function animate() { bubbles.forEach((b, i) => { const nextX = i === 0 ? mouseX : b.previousX || mouseX; const nextY = i === 0 ? mouseY : b.previousY || mouseY; b.style.left = nextX + 'px'; b.style.top = nextY + 'px'; b.previousX = nextX - (nextX - (b.previousX || nextX)) * 0.3; b.previousY = nextY - (nextY - (b.previousY || nextY)) * 0.3; }); requestAnimationFrame(animate); }
animate();