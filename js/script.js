
document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 3000);
var currentAlbum;

const frame = document.querySelector(".frame");
const slides = frame.querySelectorAll("img");

const pastries = document.querySelector(".slides2");
const slides2 = pastries.querySelectorAll("img");

const adoptables = document.querySelector(".slides3");
const slides3 = adoptables.querySelectorAll("img");

const caption = frame.querySelector('figcaption');
const caption2 = pastries.querySelector('figcaption');
const caption3 = adoptables.querySelector('figcaption');

const drinkAlbum = document.querySelector(".coffee");
const pastryAlbum = document.querySelector(".pastries");
const adoptAlbum = document.querySelector(".adopt");

const nxt = "";
const prev = "";

function init(){

  const nxt = document.querySelector(".nxt");
  const prev = document.querySelector(".prev");
  currentAlbum = slides;

  currentAlbum.forEach((pic) => {
    pic.classList.add("hide");
  });

  slides2.forEach((pic) => {
    pic.classList.add("hide");
  });

  slides3.forEach((pic) => {
    pic.classList.add("hide");
  });
  
  currentAlbum[0].classList.remove("hide");
  
  nxt.addEventListener("click", changeSlide);
  //nxt.addEventListener("click",function(e) {changeSlide(e, 2);}, false); 
  prev.addEventListener("click", changeSlide);

  caption.innerHTML = slides[0].alt;
  caption2.classList.add("hide");
  caption3.classList.add("hide");
  
  pastryAlbum.addEventListener("click", changeAlbum); 
  adoptAlbum.addEventListener("click", changeAlbum); 
  drinkAlbum.addEventListener("click", changeAlbum); 
}

function changeAlbum(e){

  if(e){
        // stop link from trying to reload page
        e.preventDefault();
        clearInterval(myInterval);
  }
 //gets the currentAlbum
 var target = e.target.classList[0];
  console.log(target);

  switch (target) {
    case "pastries": 
      currentAlbum = slides2;
      slides2[0].classList.remove("hide");
      caption2.innerHTML = slides2[0].alt;
      slides.forEach((pic) => {pic.classList.add("hide");});
      slides3.forEach((pic) => {pic.classList.add("hide");});
      caption.classList.add("hide");
      caption3.classList.add("hide");
      caption2.classList.remove("hide");
      e.preventDefault();
      break;
    case "adopt":
      currentAlbum = slides3;
      slides3[0].classList.remove("hide");
      caption3.innerHTML = slides3[0].alt;
      slides.forEach((pic) => {pic.classList.add("hide");});
      slides2.forEach((pic) => {pic.classList.add("hide");});
      caption.classList.add("hide");
      caption2.classList.add("hide");
      caption3.classList.remove("hide");
      e.preventDefault();
      break;
    default: 
      currentAlbum = slides;
      slides[0].classList.remove("hide");
      caption.innerHTML = slides[0].alt;
      slides2.forEach((pic) => {pic.classList.add("hide");});
      slides3.forEach((pic) => {pic.classList.add("hide");});
      caption2.classList.add("hide");
      caption3.classList.add("hide");
      caption.classList.remove("hide");
      e.preventDefault();
      break;
  }
  //return target;
}

function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    clearInterval(myInterval);
  }
  //const frame = document.querySelector(".frame");
  //const slides = frame.querySelectorAll("img");

  const caption = frame.querySelector('figcaption');

  let showing = document.querySelector(".current");
  let nextUp = "";

  if(!e || e.target.className == 'nxt') {
    nextUp = showing.nextElementSibling;
  } else {
    nextUp = showing.previousElementSibling;
  }

  showing.classList.add("hide");
  showing.classList.remove("current");

  //make sure next image is there
  if (!nextUp) {
    //nextUp = slides[slides.length - 1];
    nextUp = currentAlbum[currentAlbum.length - 1];
  }

  if (nextUp.nodeName !== "IMG") {
    //nextUp = slides[0];
    nextUp = currentAlbum[0];
  }

  // activate next image
  nextUp.classList.remove("hide");
  nextUp.classList.add("current");

  caption.innerHTML = nextUp.alt;
}  
