let callButton = document.querySelectorAll('.call-button');
let call = document.querySelector('.call');
let closeButton = call.querySelector('.close-button')
let isShowed = false;

callButton.forEach((el) => {
  el.addEventListener('click', function(){
    call.classList.add('pop-up__right');
  })
  
  closeButton.addEventListener('click', function(){
    call.classList.remove('pop-up__right');
  })
})
