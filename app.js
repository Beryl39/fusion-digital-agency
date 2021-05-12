// Stage Area Image Carousel

let imagesArray = ['./img/carousel-1.jpg',
'./img/carousel-2.jpg',
'./img/carousel-3.jpg',
'./img/carousel-4.jpg']


let img = $('.carousel-img')
let i = 0;

setInterval (function(){
  i = (i + 1) % imagesArray.length;
  
  $(document).ready(function(){
  img.fadeOut(1500, () => {
    img.attr("src", imagesArray[i]);
    img.fadeIn(1500);
  });
});
}, 8000);

// Navbar Dropdown Menu

// $(function(){
//   $('.dropdown').hover(function(){
//     $(this).find('.dropdown-menu').first().stop().toggle(200);
//   }, function (){
//     $(this).find('.dropdown-menu').stop().hide(200);
//   });
// });

// Menu-toggle button

$(document).ready(function() {
  $(".nav-toggle").on("click", function() {
        $("nav ul").toggleClass("show-nav");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})