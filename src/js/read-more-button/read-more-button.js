let service = document.querySelectorAll('.page-service-block__text');
let isShowed = false;

console.log('show-text')

service.forEach((el) => {
  let button = el.querySelector('.show-all-text')
  let text = el.querySelector('.show-all-text__text')
  let buttonIcon = el.querySelector('.show-all-text__icon');
  let paragraph = el.querySelectorAll('.page-service-block__paragraph');
  button.addEventListener('click', function(evt) {
    console.log('click')
    evt.preventDefault();
    if (!isShowed){
      isShowed = true;
      text.textContent = 'Скрыть';
      buttonIcon.style.cssText = 'transform: rotate(180deg);';
      for (let i = 0; i < paragraph.length; i++){
        paragraph[i].style.display = 'block';
      } 
    } else {
      isShowed =  false;
      text.textContent = 'Читать далее';
      buttonIcon.style.cssText = 'transform: rotate(0deg);';
      for (let i = 0; i < paragraph.length; i++){
        paragraph[i].style.display = '';
      }
    }
  })
})
