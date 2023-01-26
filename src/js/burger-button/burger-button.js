let burgerButton = document.querySelector('.round-buttons--burger');
let menu = document.querySelector('.menu');
let closeButton = menu.querySelector('.round-buttons--close');
let fog = document.querySelector('.fog-of-war');

if (window.innerWidth > 1120){
  if (menu.classList.contains('pop-up__left')){
    menu.classList.remove('pop-up__left');
  }
}

burgerButton.addEventListener('click', function(){
  menu.classList.add('pop-up__left');
  fog.classList.add('fog-of-war--active');
})

closeButton.addEventListener('click', function(){
  menu.classList.remove('pop-up__left');
  fog.classList.remove('fog-of-war--active');
})