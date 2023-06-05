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
  slidesToShow: 3,
  centerMode: true,
  variableWidth: true,
  slidesToScroll: 1,
  dots: false,
  arrow:true,
  infinite: true,
   responsive: [
    
    {
      breakpoint: 1178,
      settings: {
        centerPadding: false,
        slidesToShow:1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
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
  arrow: false,
  infinite: true,
  autoplay: true,
  autoplay: true, 
  autoplaySpeed: 0,
   speed: 10000,
  cssEase: 'linear',
  pauseOnHover: true,
  pauseOnFocus: false,
  waitForAnimate: false,
  responsive: [
    {
      breakpoint: 1480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 1178,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerMode: false,
      }
    },
    {
      breakpoint: 378,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerMode: false,
      }
    }
  ]
});
$('.recomen_slider').on('mouseenter', function() {
  $(this).slick('slickPause');
});

$('.recomen_slider').on('mouseleave', function() {
  $(this).slick('slickPlay');
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


// Получаем все элементы аккордеона
const accordionItems = document.querySelectorAll('.shop_accordion-item');

// Добавляем обработчик событий на клик по заголовку аккордеона
accordionItems.forEach(item => {
  const header = item.querySelector('.shop_accordion-header');
  const content = item.querySelector('.shop_accordion-content');
  
  // Обработчик события клика по заголовку
  header.addEventListener('click', () => {
    // Добавляем/удаляем класс active для заголовка и элемента
    header.classList.toggle('active');
    item.classList.toggle('active');
    
    // Если элемент открыт, то устанавливаем максимальную высоту для контента
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = 0;
    }
  });
});


$(function() {
  // Получите элементы ползунка и текстовых полей
  var priceSlider = $("#price-slider");
  var minPriceField = $("#min-price");
  var maxPriceField = $("#max-price");
  
  // Установите начальные значения цен
  var minPrice = 100;
  var maxPrice = 1000;
  minPriceField.val(minPrice);
  maxPriceField.val(maxPrice);
  
  // Инициализируйте ползунок с ценой
  priceSlider.slider({
    range: true,
    min: 0,
    max: 1000,
    values: [minPrice, maxPrice],
    slide: function(event, ui) {
      // Обновите значения текстовых полей при изменении положения ползунка
      minPriceField.val(ui.values[0]);
      maxPriceField.val(ui.values[1]);
    }
  });
});



$(document).ready(function() {
  // Плавная прокрутка до якоря при клике на кнопку
  $('a').click(function() {
    var target = $(this.hash);
    $('html, body').animate({
      scrollTop: target.offset().top + -50
    }, 800);
    return false;
  });
});

jQuery(function($) {
  // Функция для обновления итоговой суммы
  function updateTotalPrice() {
    var quantity = parseInt($('.quantity-input').val());
    var price = parseFloat($('.product-price').text()); // Здесь '.product-price' - селектор элемента с ценой товара
    var totalPrice = quantity * price;
    $('.total-amount').text(totalPrice.toFixed(2)); // Здесь '.total-amount' - селектор элемента для вывода итоговой суммы
  }

  // Обработчик события клика на кнопку минус
  $('.quantity-block .minus').click(function(e) {
    e.preventDefault();
    var $input = $(this).closest('.quantity-block').find('.quantity-input');
    var value = parseInt($input.val());
    if (value > 1) {
      $input.val(value - 1);
      updateTotalPrice(); // Обновляем итоговую сумму при изменении количества
    }
  });

  // Обработчик события клика на кнопку плюс
  $('.quantity-block .plus').click(function(e) {
    e.preventDefault();
    var $input = $(this).closest('.quantity-block').find('.quantity-input');
    var value = parseInt($input.val());
    $input.val(value + 1);
    updateTotalPrice(); // Обновляем итоговую сумму при изменении количества
  });

  // Обработчик события изменения значения ввода количества
  $('.quantity-block .quantity-input').change(function() {
    updateTotalPrice(); // Обновляем итоговую сумму при изменении количества
  });

  // Инициализация итоговой суммы при загрузке страницы
  updateTotalPrice();
});

$(document).ready(function() {
  $("#search-button").click(function() {
    $(".search_bar_popup").toggleClass("active");
  });
});

document.addEventListener('DOMContentLoaded', function() {
  let burger = document.querySelector('.burger');
  let menu = document.querySelector('header');
  let body = document.body;
  
  burger.addEventListener('click', function() {
    menu.classList.toggle('active');
    body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  let filter = document.querySelector('.shop_filter_title img');
  let filterMenu = document.querySelector('.shop_accordion');
  let priceSlider = document.querySelector('.shop_price_slider');
  
  filter.addEventListener('click', function() {
    filterMenu.classList.toggle('active');
    priceSlider.classList.toggle('active');
  });
});
