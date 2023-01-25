let callButton = document.querySelectorAll('.call-button');
let call = document.querySelector('.call');
let closeButton = call.querySelector('.close-button')
let fog = document.querySelector('.fog-of-war');


callButton.forEach((el) => {
  el.addEventListener('click', function(){
    let activePopup = document.querySelectorAll('.active')
    if (activePopup.length != 0) {
      activePopup.forEach(el =>{
        el.classList.remove('pop-up__right');
      })
    }
    call.classList.add('pop-up__right');
    call.classList.add('active');
    fog.classList.add('fog-of-war--active');
  })
  
  closeButton.addEventListener('click', function(){
    call.classList.remove('pop-up__right');
    call.classList.remove('active');
    fog.classList.remove('fog-of-war--active');

  })
})
