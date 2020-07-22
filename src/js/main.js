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
    slidesToScroll: 1,
    draggable: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});