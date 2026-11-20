const menuButton=document.querySelector('.mobile-menu');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('nav-open',!open)})}
document.querySelectorAll('.main-nav a').forEach(link=>link.addEventListener('click',()=>{nav?.classList.remove('nav-open');menuButton?.setAttribute('aria-expanded','false')}));
