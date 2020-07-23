$('.visual-slider .slick-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
    speed: 700,
    infinite: true,
    cssEase: 'ease-in-out',
    touchThreshold: 100,
    dots: true,
    pauseOnHover: false,
     adaptiveHeight: true,
});
$('.customer-list .slick-wrapper').slick({
    slidesToShow: 3,
    // slidesToScroll: 1,
    draggable: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});
$('.gallery-board .slick-wrapper').slick({
    draggable: false,
    dots: false,
    infinite: true,
    nextArrow: '.gallery-board .btn-move .next',
    prevArrow: '.gallery-board .btn-move .prev',
});

// scroll event
$(window).scroll(function () {
    var sc = $(window).scrollTop();
    contentsMotion1(sc);
    contentsMotion2(sc);
    contentsMotion3(sc);
    contentsMotion5(sc);
});

function contentsMotion1(sc){
    if(sc > 300) {
        $('.con1').addClass('move');
    }
}
function contentsMotion2(sc){
    if(sc > 900) {
        $('.con2').addClass('move');
    }
}
function contentsMotion3(sc){
    if(sc > 1500) {
        $('.con3').addClass('move');
    }
}
function contentsMotion5(sc){
    if(sc > 3000) {
        $('.con5').addClass('move');
    }
}