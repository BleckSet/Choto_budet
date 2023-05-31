// Получаем все элементы с классом "anim"
let elements = document.getElementsByClassName('anim');

// Задаем CSS-свойство transition для плавного перехода
for (let i = 0; i < elements.length; i++) {
  let element = elements[i];
  element.style.transition = 'transform 2s ease-in-out';
}

// Запускаем функцию для обновления позиций элементов каждую секунду
setInterval(function() {
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i];

    // Добавляем случайное смещение по оси X и Y
    element.style.transform = 'translate(' + getRandomOffset() + 'px, ' + getRandomOffset() + 'px)';
  }
}, 2000);

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

$(document).ready(function() {
  var sidebar = $('.sidebar_intro');
  var submenu = $('.submenu_intro');
  var menuButton = $('.menu-button_intro');

  menuButton.click(function() {
    var buttonId = $(this).attr('id');
    var menuId = buttonId.split('-')[0] + '-menu';

    sidebar.addClass('opened');
    submenu.removeClass('active');
    $('#' + menuId).toggleClass('active');
    menuButton.removeClass('active');
    $(this).addClass('active');
  });

  $(document).click(function(event) {
    if (!$(event.target).closest('.sidebar_intro, .menu-button_intro').length) {
      sidebar.removeClass('opened');
      submenu.removeClass('active');
      menuButton.removeClass('active');
    }
  });
});
