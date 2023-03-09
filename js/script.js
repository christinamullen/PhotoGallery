//const baseURL = "/imgs/";

//const slides = ["1esspresso.jpg", "2macchiato.jpg", "3cortado.jpg", "4cappucino.jpg', 'Avietnamesecoffee.jpg', '6mocha.jpg', 'BchaiLatte.jpg', '8cafeaulait.jpg', '9icedcoffee.jpg', '5latte.jpg', '7affogato.jpg'];
document.addEventListener('DOMContentLoaded', init);
var myInterval = setInterval(changeSlide, 3000);

 function init(){
  const nxt = document.querySelector(".nxt");
  const prev = document.querySelector(".prev");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
  const pastries = document.querySelector(".slides2");
  const slides2 = pastries.querySelectorAll("img");
  const caption = frame.querySelector('figcaption');

  slides.forEach((pic) => {
    pic.classList.add("hide");
  });

  slides2.forEach((pic) => {
    pic.classList.add("hide");
  });

  slides[0].classList.remove("hide");

  nxt.addEventListener("click", changeSlide);
  prev.addEventListener("click", changeSlide);

  caption.innerHTML = slides[0].alt;
}


//let index = 0;
function changeSlide(e) {
  if(e) {
    // stop link from trying to reload page
    e.preventDefault();
    clearInterval(myInterval);
  }

  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");
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
    nextUp = slides[slides.length - 1];
  }

  if (nextUp.nodeName !== "IMG") {
    nextUp = slides[0];
  }

  // activate next image
  nextUp.classList.remove("hide");
  nextUp.classList.add("current");

  caption.innerHTML = nextUp.alt;
/*
  nxt.onclick = function(e) {
    e.preventDefault();
    
    slide.src = baseURL + slides[index];
    index++;
    console.log(index);
   
    //if end of array, start at beginning [0] again
    if(index >= slides.length) {
      index = 0;
    }
  }
  
  //Previous button event listener
  prev.onclick = function(e) {
    e.preventDefault();
    if (index === 0){
      index = slides.length - 1;
    }
    else {
      index--;
    }
    slide.src = baseURL + slides[index];
    console.log(index);
  }
*/
}   



