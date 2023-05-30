// Получаем все элементы с классом "anim"
var elements = document.getElementsByClassName('anim');

// Задаем CSS-свойство transition для плавного перехода
for (var i = 0; i < elements.length; i++) {
  var element = elements[i];
  element.style.transition = 'transform 2s ease-in-out';
}

// Запускаем функцию для обновления позиций элементов каждую секунду
setInterval(function() {
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // Добавляем случайное смещение по оси X и Y
    element.style.transform = 'translate(' + getRandomOffset() + 'px, ' + getRandomOffset() + 'px)';
  }
}, 1500);

// Функция для генерации случайного смещения в диапазоне от -40 до 40
function getRandomOffset() {
  return Math.floor(Math.random() * 81) - 40;
}


2

  
$('.product_slider').slick({
  slidesToShow: 2,
  centerMode: true,
  centerPadding: '20px',
  slidesToScroll: 1,
  dots: false,
  arrow:true,
  infinite: true,
  variableWidth:true,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false
      }
    }
    
  ],
  prevArrow: $('.custom_btn_slider_left'),
  nextArrow: $('.custom_btn_slider_right')
  
});

$('.recomen_slider').slick({
  slidesToShow: 5.5,
  slidesToScroll: 1,
  dots: false,
  arrow:false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
   
    
  ]
 
});