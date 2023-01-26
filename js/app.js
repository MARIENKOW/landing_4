$(document).ready(function () {
      $('.buy__slider').slick({
            arrows: true,
            dots: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            speed: 500,
            easing: 'ease-in-out',
            infinite: false,
            autoplay: true,
            autoplaySpeed: 4000,
            touchTreshold: 5,
            centerMode: false,
            focusOnSelect:false,
            prevArrow:$('.buy__prevArrow'),
            nextArrow:$('.buy__nextArrow'),
            responsive: [
                  {
                  breakpoint: 956,
                  settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                  }
                  },
                  {
                        breakpoint: 600,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1,
                        }
                        }
            ]
      });
});

spoilerFlex();
window.addEventListener('resize',spoilerFlex);
const burger =  document.querySelector('.header__burger')
burger.addEventListener('click',navigationOpen)
function navigationOpen(){
      const body = document.querySelector("body")
      body.classList.toggle("_navigationActive")
      stopScroll(body,"_navigationActive")
}
function stopScroll(element,clas){
      const body = document.querySelector("body")
      if(element.classList.contains(clas)){
            body.style.overflow="hidden";
      }else{
            body.style.overflow="";
      }
}