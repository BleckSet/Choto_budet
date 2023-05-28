document.body.addEventListener('mousemove', function(e) {
    var x = e.pageX - (window.innerWidth / 2);
    var y = e.pageY - (window.innerHeight / 2);
  
    var animElements = document.querySelectorAll('.anim');
    animElements.forEach(function(animElement) {
      var factor = parseFloat(animElement.getAttribute('data-mouse-parallax'));
      var newX = x * factor;
      var newY = y * factor;
  
      animElement.style.transform = 'translate3d(' + newX + 'px, ' + newY + 'px, 0)';
    });
  });
  