
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



new WOW().init();

window.addEventListener("scroll", function(){


    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;


    if(scrollTop > lastScrollTop){
        navbar.style.top = "-10vh";
    }else {
        navbar.style.top="0"
        navbar.style.boxShadow = "0 10px 30px rgb(7 20 40)";
        navbar.style.backdropFilter = "blur(10px)";
        navbar.style.background = "rgb(7 26 55 / 87%)";
    }
    lastScrollTop = scrollTop;

    if(scrollTop == 0){
        navbar.style.boxShadow = "none";
        navbar.style.backdropFilter = "none";
        navbar.style.background = "transparent";
    }

})

const menuBtn = document.querySelector('.menu-btn');
const body = document.getElementById("body");
const menuCover = document.querySelector(".menu-cover");
let ulCover = document.querySelectorAll(".link-cover");
let menuOpen = false;


let setTimeCoverOut = () => {
    body.style.overflow = "auto";
    menuBtn.classList.remove('open');
    menuOpen = false;
    menuCover.style.animation = "circles 0.5s";

    setTimeout(() => {
        menuCover.style.display = "none";
        
    }, 500);
}


menuBtn.addEventListener('click', () => {

    if(!menuOpen){
        menuBtn.classList.add('open');
        body.style.overflow = "hidden";
        menuCover.style.display = "block";
        menuCover.style.animation = "circle 0.5s";
        menuOpen = true;

    }else{
        setTimeCoverOut()

    }
});

    ulCover[0].addEventListener('click', () => {
        setTimeCoverOut()
    });
    ulCover[1].addEventListener('click', () => {

        setTimeCoverOut()
    });
    ulCover[2].addEventListener('click', () => {

        setTimeCoverOut()
    });
    ulCover[3].addEventListener('click', () => {
        setTimeCoverOut()
    });




