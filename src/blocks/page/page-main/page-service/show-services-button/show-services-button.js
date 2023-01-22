let service = document.querySelectorAll('.page-service__services');
let isShowed = false;

console.log('show-services')

service.forEach((el) => {
  let button = el.querySelector('.show-services-button')
  let text = el.querySelector('.show-services-button__text')
  let buttonIcon = el.querySelector('.show-services-button__icon');
  let categories = el.querySelectorAll('.service-category');
  button.addEventListener('click', function(evt) {
    console.log('click')
    evt.preventDefault();
    if (!isShowed){
      isShowed = true;
      text.textContent = 'Скрыть';
      buttonIcon.style.cssText = 'transform: rotate(180deg);';
      for (let i = 0; i < categories.length; i++){
        categories[i].style.display = 'block';
      } 
    } else {
      isShowed =  false;
      text.textContent = 'Показать все';
      buttonIcon.style.cssText = 'transform: rotate(0deg);';
      for (let i = 0; i < categories.length; i++){
        categories[i].style.display = '';
      }
    }
  })
})
