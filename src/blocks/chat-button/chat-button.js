let feedbackButton = document.querySelectorAll('.chat-button');
let feedback = document.querySelector('.feedback');
let closeButton = feedback.querySelector('.close-button')
let isShowed = false;

console.log(feedbackButton);

feedbackButton.forEach((el) => {
  el.addEventListener('click', function(){
    feedback.classList.add('pop-up__right');
  })
  
  closeButton.addEventListener('click', function(){
    feedback.classList.remove('pop-up__right');
  })
})
