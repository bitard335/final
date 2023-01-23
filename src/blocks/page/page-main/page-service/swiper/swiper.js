import Swiper, { Pagination } from "swiper";

let slider = document.querySelectorAll('.swiper');
let width
let swiper;

console.log('slider.js Works!')
console.log(slider);

function mobileSlider(){
    width = window.innerWidth;
    console.log(width)
    slider.forEach((el) => {
        if(width < 768 && el.dataset.mobile == "false"){
            swiper = new Swiper(el,{
            modules: [Pagination],
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                },
            })
            el.dataset.mobile = "true";
        } if (width >= 768 && el.dataset.mobile == "true"){
            console.log('destroy')
            el.dataset.mobile = "false";
            if (el.classList.contains('swiper-initialized')) {
                swiper.destroy();
            }
        }
    })
    
}

mobileSlider();







