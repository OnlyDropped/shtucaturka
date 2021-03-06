$('.slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 7000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    draggable: false,
    responsive: [
                        {
        breakpoint: 1025,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '70px'
        }
    },
                  {
        breakpoint: 769,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '70px'
        }
    },
            {
        breakpoint: 426,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '10px'
        }
    },
      {
        breakpoint: 376,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            centerPadding: '20px'
        }
    },
          {
        breakpoint: 321,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
        }
    }

  ]
});
$('.review-wrapper').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev-white.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next-white.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px'
        }
    },
                  {
        breakpoint: 769,
        settings: {
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px'
        }
    },
            {
        breakpoint: 426,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '57px'
        }
    },
      {
        breakpoint: 376,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px'
        }
    },
          {
        breakpoint: 321,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10px'
        }
    }
  ]
});
$('.services-slider').slick({
    arrows: true,
    draggable: false,
    prevArrow: '<button type="button" class="slick-prev">??????????</button>',
    nextArrow: '<button type="button" class="slick-next">??????????</button>',
});
$('.catalog__inner').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    draggable: false,
    responsive: [{
            breakpoint: 1441,
            settings: {
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1025,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                //centerPadding: '0px'
            }
        },
        {
            breakpoint: 769,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '30px'
            }
        },
        {
            breakpoint: 426,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '60px'
            }
        },
        {
            breakpoint: 376,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '20px'
            }
        },
                {
            breakpoint: 321,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
                centerPadding: '20px'
            }
        }
    ]
});
//window.addEventListener("resize", function() {
//    if (window.innerWidth <= 378) {
//        $('.catalog__inner').slick('unslick');
//        sliderIsLive = true;
//    } else {
//        if (sliderIsLive) {
//            $('.catalog__inner').slick({
//                slidesToShow: 1,
//                slidesToScroll: 1,
//                centerMode: true,
//                centerPadding: '20px'
//            });
//            sliderIsLive = false;
//        }
//    }
//});