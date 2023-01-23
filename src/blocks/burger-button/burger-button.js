let burgerButton = document.querySelector('.burger-button');
let menu = document.querySelector('.menu');
let closeButton = menu.querySelector('.close-button');
let isShowed = false;

burgerButton.addEventListener('click', function(){
  menu.classList.add('pop-up__left');
})

closeButton.addEventListener('click', function(){
  menu.classList.remove('pop-up__left');
})