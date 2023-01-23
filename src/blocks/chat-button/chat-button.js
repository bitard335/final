let feedbackButton = document.querySelectorAll('.chat-button');
let feedback = document.querySelector('.feedback');
let closeButton = feedback.querySelector('.close-button')
let fog = document.querySelector('.fog-of-war');

console.log(feedbackButton);


feedbackButton.forEach((el) => {
  el.addEventListener('click', function(){
    let activePopup = document.querySelectorAll('.active')
    if (activePopup.length != 0) {
      activePopup.forEach(el =>{
        el.classList.remove('pop-up__right');
      })
    }
    feedback.classList.add('pop-up__right');
    feedback.classList.add('active');
    fog.classList.add('fog-of-war--active');
  })
  
  closeButton.addEventListener('click', function(){
    feedback.classList.remove('pop-up__right');
    feedback.classList.remove('active');
    fog.classList.remove('fog-of-war--active');
  })
})
