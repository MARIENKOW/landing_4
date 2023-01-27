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


const animation  = [
      document.querySelector(".download__photo"),
]
checkCoordinates(animation);

window.addEventListener('scroll',()=>{
      checkCoordinates(animation);
      headerFixed(document.querySelector("header"),document.querySelector(".intro"))
});

function checkCoordinates(arr){
      const windowPart = window.innerHeight - window.innerHeight / 3;
      if(Array.isArray(arr) && arr.length>0){
            for(let element of arr){
                  const elementTop = element.getBoundingClientRect().y;
                  if(windowPart> elementTop){
                        element.classList.add("_blockActive");
                  }else{
                        element.classList.remove("_blockActive");
                  }
            }
      }
}

function headerFixed(header,block){
      if(header,block){
            const blockBottom = block.getBoundingClientRect().bottom;
            if(blockBottom<=0){
                  header.classList.add('_headerFixed')
            }else{
                  header.classList.remove('_headerFixed')
            }
      }
}
headerFixed(document.querySelector("header"),document.querySelector(".intro"))