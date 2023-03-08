const baseURL = '/imgs/';
const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const slide = document.querySelector('.pic');
const cats = ['1esspresso.jpg', '2macchiato.jpg', '3cortado.jpg', '4cappucino.jpg', 'Avietnamesecoffee.jpg', '6mocha.jpg', 'BchaiLatte.jpg', '8cafeaulait.jpg', '9icedcoffee.jpg', '5latte.jpg', '7affogato.jpg'];
let index = 0;

nxt.onclick = function(e) {
  e.preventDefault();
  
  slide.src = baseURL + cats[index];
  index++;
  console.log(index);
 
  //if end of array, start at beginning [0] again
  if(index >= cats.length) {
    index = 0;
  }
}

//Previous button event listener
prev.onclick = function(e) {
  e.preventDefault();
  if (index === 0){
    index = cats.length - 1;
  }
  else {
    index--;
  }
  slide.src = baseURL + cats[index];
  console.log(index);
}

