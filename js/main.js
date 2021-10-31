$('.slider').slick({
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 7000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    draggable: false,
    responsive: [{
        breakpoint: 376,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '10px'
        }
    }]
});
$('.review-wrapper').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 7000,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    responsive: [{
        breakpoint: 376,
        settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '20px'
        }
    }]
});
$('.services-slider').slick({
    arrows: true,
    draggable: false,
    prevArrow: '<button type="button" class="slick-prev">Назад</button>',
    nextArrow: '<button type="button" class="slick-next">Далее</button>',
});
$('.catalog__inner').slick({
    arrows: false,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/next.svg" alt=""></button>',
    draggable: false,
    responsive: [{
            breakpoint: 1441,
            settings: {
                settings: 'unslick'
            }
        },
        {
            breakpoint: 1025,
            settings: {
                settings: "unslick"
            }
        },
        {
            breakpoint: 769,
            settings: {
                settings: "unslick"
            }
        },
        {
            breakpoint: 426,
            settings: {
                settings: "unslick"
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