// scroll event
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    headerChange(sc);
    fixAsideScroll(sc);
});

// 스크롤 header 스타일 변경
function headerChange(sc) {
    if (sc > 100) {
        $('.header').addClass('fix');
    } else {
        $('.header').removeClass('fix');
    }
} 

// 가입상담신청 고정 버튼
function fixAsideScroll(sc) {
    if (sc > 600) {
        $('.fix-aside').css('display', 'block');
    } else {
        $('.fix-aside').css('display', 'none');
    }
}

// visual 영역 실시간 상담내역 rolling
tableRolling(); //
function tableRolling() {
    setInterval(function () {
        var first = $('.visual .consulting-list .list-body').children().first();
        first.addClass('hide', backAppend(first));
    }, 3000);

    function backAppend(first) {
        var firstEl = first;
        setTimeout(function () {
            $('.visual .consulting-list .list-body').append(firstEl);
            $('.visual .consulting-list .list-body li').removeClass('hide');
        }, 500, firstEl)
    }
}

// slick slide
$('.visual-slider .slick-wrapper').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
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
    draggable: false,
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
});

$('.list-board .slick-wrapper').slick({
    draggable: false,
    dots: false,
    infinite: true,
    nextArrow: '.list-board .btn-move .next',
    prevArrow: '.list-board .btn-move .prev',
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
    contentsMotion4(sc);
    contentsMotion5(sc);
    boardMotion(sc);
    resetMotion(sc);
});

function resetMotion(sc){
    if(sc < 200) {
        $('.contents').removeClass('move');
    }
}

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
function contentsMotion4(sc){
    if(sc > 2259) {
        $('.con4').addClass('move');
    }
}
function contentsMotion5(sc){
    if(sc > 3000) {
        $('.con5').addClass('move');
    }
}
function boardMotion(sc){
    if(sc > 3568) {
        $('.board').addClass('move');
    }
}

// 해상도 분기
$(window).resize(function(){
    resolutionFuntion();
});
resolutionFuntion();
function resolutionFuntion() {
    if (matchMedia("screen and (max-width: 1024px)").matches) { // 1024 이하
        $('.fix-aside').css('display', 'block');
        $('.main-pop-wrap .slick-wrapper').slick({
            draggable: false,
            dots: false,
            infinite: false,
        });
    } else { // 1024 초과
        if ($('.main-pop-wrap .slick-wrapper').hasClass('slick-slider')) {
            $('.main-pop-wrap .slick-wrapper').slick('unslick');
        }
        $('.fix-aside').css('display', 'none');
    }
}



// 메인 장례수행실적 교차 fade in - out
achievementsAnimation();
function achievementsAnimation() {

    achievementsCross();
    function achievementsCross() {
        if ($('.js-cross-view span:first-child').css('opacity') === '0') {
            $('.js-cross-view span:last-child').css('opacity', 0);
            $('.js-cross-view span:first-child').css('opacity', '1');
        } else {
            $('.js-cross-view span:first-child').css('opacity', 0);
            $('.js-cross-view span:last-child').css('opacity', 1);
        }

    }
    setInterval(function () {
        achievementsCross();
    }, 6000); //교차 속도
}

// main popup
$('.main-pop-wrap .btn-close').on('click', function () {
    if (matchMedia("screen and (max-width: 1024px)").matches) { // 1024 이하
        var slideCount = $('.main-pop').length;
        var thisIdx = $(this).parents('.main-pop').index();
        $('.main-pop-wrap .slick-wrapper').slick('slickRemove',thisIdx);
        if (slideCount === 1) {
            $('.main-pop-wrap').hide();
        }
    } else { // 1024 초과
        $(this).parents('.main-pop').hide();
    }
    
});