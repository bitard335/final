let burgerButton = document.querySelector('.burger-button');
let closeButton = document.querySelector('.close-button')
let menu = document.querySelector('.menu');
let isShowed = false;

burgerButton.addEventListener('click', function(){
  menu.classList.add('pop-up');
})

closeButton.addEventListener('click', function(){
  menu.classList.remove('pop-up');
})