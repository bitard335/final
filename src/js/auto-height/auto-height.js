let size = document.documentElement.scrollHeight;
let feedback = document.querySelector('.feedback');
let call = document.querySelector('.call');
let menu = document.querySelector('.menu');

function declareModalHeight(height){

  feedback.style.height = `${height}px`;
  call.style.height = `${height}px`;
  menu.style.height = `${height}px`;
}

declareModalHeight(size);

window.addEventListener('resize', function(){
  size = document.documentElement.scrollHeight;
  declareModalHeight(size);
  console.log('resizing')
})