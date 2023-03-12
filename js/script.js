document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 3000);
var currentAlbum;
var currFigure;
var currSlides;

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

function init() {

  const nxt = document.querySelector(".nxt");
  const prev = document.querySelector(".prev");
  currentAlbum = slides;
  currFigure = frame;

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

function changeAlbum(e) {
  if (!e) {
    //if event didnt occur, dont continue
    return;
  }
  // stop link from trying to reload page
  e.preventDefault();
  clearInterval(myInterval);

  //get the current Album by id
  let targetButton = e.target;
  let newId = targetButton.id;

  //get the id of the album
  let newFigure = document.querySelector("." + newId);
  let newAlbum = newFigure.querySelectorAll("img");

  //replace figcaption with alt text
  let currCaption = currFigure.querySelector('figcaption');
  currCaption.classList.add("hide");
  currCaption.innerHtml = currentAlbum[0].alt;
  console.log("Old caption:" + currCaption.innerHTML);

  //hide other pics
  currentAlbum.forEach((pic) => {
    pic.classList.add("hide");
  });
  //reset previous current
  let showing = newFigure.querySelector(".current");
  showing.classList.remove("current");

  //to position 0
  showing = newAlbum[0];
  showing.classList.remove("hide");
  showing.classList.add("current");

  //get figcaption
  let newCaption = newFigure.querySelector('figcaption');
  console.log("Old figcaption:" + newCaption.innerHTML);

  //replace with new alt text
  newCaption.innerHTML = showing.alt;
  console.log("New caption:" + showing.alt);

  newCaption.classList.remove("hide");

  currentAlbum = newAlbum;
  currFigure = newFigure;
}

function changeSlide(e) {
  if (e) {
    e.preventDefault();
    clearInterval(myInterval);
  }

  let currCaption = currFigure.querySelector('figcaption');
  let showing = currFigure.querySelector(".current");
  let nextUp = "";

  if (!e || e.target.className == 'nxt') {
    nextUp = showing.nextElementSibling;
  } else {
    nextUp = showing.previousElementSibling;
  }

  showing.classList.add("hide");
  showing.classList.remove("current");

  //make sure next image is there
  if (!nextUp) {
    nextUp = currentAlbum[currentAlbum.length - 1];
  }

  if (nextUp.nodeName !== "IMG") {
    nextUp = currentAlbum[0];
  }

  // activate next image
  nextUp.classList.remove("hide");
  nextUp.classList.add("current");

  currCaption.innerHTML = nextUp.alt;
}