var mainVisual = new Swiper('.visual-slider', {
    simulateTouch: false,
    effect: 'fade',
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 4000,
    },
});
var customerList = new Swiper('.customer-list .swiper-container', {
    simulateTouch: false,
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 2000,
    },
});