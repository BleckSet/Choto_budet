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


   
   // document.body.addEventListener('mousemove', function(e) {
   //     let x = e.pageX - (window.innerWidth / 2);
   //     let y = e.pageY - (window.innerHeight / 2);
     
   //     let animElements = document.querySelectorAll('.anim');
   //     animElements.forEach(function(animElement) {
   //       let factor = parseFloat(animElement.getAttribute('data-mouse-parallax'));
   //       let newX = x * factor;
   //       let newY = y * factor;
     
   //       animElement.style.transform = 'translate3d(' + newX + 'px, ' + newY + 'px, 0)';
   //     });
   //   });
     
   
