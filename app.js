
gsap.timeline ({
    defaults: {
        duration:4,
        repeat:-1,
        stagger: 0.05,
        ease: 'elastic.inOut(3)'
    }
})
.to('.icon', {
    opacity:1,
    y: 50
})
.from('.icon', {
    opacity:0,
    y: 70
})

let lastScrollTop = 0;

let navbar = document.getElementById("navbar");


window.addEventListener("scroll", function(){


    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if(scrollTop > lastScrollTop){
        navbar.style.top = "-10vh";
    }else {
        navbar.style.top="0"
        navbar.style.boxShadow = "0 10px 30px rgb(7 20 40)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.background = "#071a37bd";
    }
    lastScrollTop = scrollTop;

    if(scrollTop == 0){
        navbar.style.boxShadow = "none";
        navbar.style.backdropFilter = "none";
        navbar.style.background = "transparent";
    }

})

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

new WOW().init();