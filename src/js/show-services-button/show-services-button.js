let service = document.querySelectorAll('.page-service__services');
let isShowed = false;

service.forEach((el) => {
  
  if (!el.classList.contains('repair-pricelist__services')){
    let button = el.querySelector('.show-services-button')
    let text = el.querySelector('.show-services-button__text')
    let buttonIcon = el.querySelector('.show-services-button__icon');
    let categories = el.querySelectorAll('.service-category');
    button.addEventListener('click', function(evt) {
      evt.preventDefault();
      if (!isShowed){
        isShowed = true;
        text.textContent = 'Скрыть';
        buttonIcon.style.cssText = 'transform: rotate(180deg);';
        for (let i = 0; i < categories.length; i++){
          categories[i].style.display = 'flex';
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
  }
})
