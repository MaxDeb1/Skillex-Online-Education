let menuToggle = document.querySelector('.menu-btn');
let menuResponsive = document.querySelector('nav');
let fadeIn = document.querySelector('ul');

menuToggle.onclick = function() {
	menuToggle.classList.toggle('open')

    setTimeout(function() { 
        fadeIn.classList.toggle('fade-in')
    }, 550);
}


let card = document.querySelectorAll('.card')

for (var i = 0 ; i < card.length; i++) {
    card[i].addEventListener("mouseover", e => {
        if (e.target === card[1] || card[2]){
            card[0].classList.remove('active');
        }
      }, false);
    card[i].addEventListener("mouseout", e => {
        if (e.target === card[1] || card[2]){
            card[0].classList.add('active');
        }
      }, false);
}

/****  Stop Animations During Window Resizing   ****/
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

/****  GSAP Animations   ****/
const rightSide = document.querySelector('.right-side');
const heroText = document.querySelector('.hero-text');
const heroForm = document.querySelector('#hero-form');
const navBar = document.querySelector('header');

window.addEventListener('load', () => {
  const tl = gsap.timeline({paused: true});

  tl
  .from(rightSide, 1, {transform: "translateX(-400px)", opacity: 0, ease: "power2.out"})
  .from(heroText, 1, {transform: "translateY(100px)", opacity: 0, ease: "power2.out"}, '-=0.8')
  .from(heroForm, 1, {bottom: -120, opacity: 0, ease: "power2.out"}, '-=1')
  .from(navBar, 1, {transform: "translateY(-112px)", ease: "power2.out"},'-=0.6')

  tl.play()
})


let box = document.querySelectorAll('.box')

for (var i = 0 ; i < box.length; i++) {
    box[i].addEventListener("mouseover", e => {
        if (e.target === box[1] || box[2]){
            box[0].classList.remove('active');
        }
      }, false);
    box[i].addEventListener("mouseout", e => {
        if (e.target === box[1] || box[2]){
            box[0].classList.add('active');
        }
      }, false);
}