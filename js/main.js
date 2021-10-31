$('.slider').slick({
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000, 
  prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
  draggable: false
});
$('.review-wrapper').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
  
});
$('.services-slider').slick({
  arrows: true,
  draggable: false,
  prevArrow: '<button type="button" class="slick-prev">Назад</button>',
  nextArrow: '<button type="button" class="slick-next">Далее</button>',
});