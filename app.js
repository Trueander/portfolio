gsap.from('#person', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -10, opacity:0, delay:2})
gsap.from('#line', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -10, opacity:0, delay:1.5})
gsap.from('.right', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -10,delay: 2, opacity:0})
gsap.from('.info-container', {duration:1, x: '30%', ease: "slow(0.7, 0.7, false)", x: -100, opacity:0, delay:1})
gsap.from('.nav-container', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -10, opacity:0, delay:2})

gsap.from('#envelope', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -10, opacity:0, delay:0.35})
gsap.from('#paper', {duration:1, y: '10%', ease: "slow(0.7, 0.7, false)", y: -20, opacity:0, delay:0.7})


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen){
        menuBtn.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
});