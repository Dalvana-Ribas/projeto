function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const box = document.querySelector('.box');
let position = 0;

setInterval(() => {
    position += 15;
    box.style.transform = `translateX(${position}px)`;
}, 100);

$(document).ready(function() {
  $('.box').hover(function() {
    $(this).animate({ width: '+=50px', height: '+=50px' }, 500);
  }, function() {
    $(this).animate({ width: '-=50px', height: '-=50px' }, 500);
  });
});
