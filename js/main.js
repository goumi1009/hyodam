// scroll event
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    headerChange(sc);
    if (matchMedia("screen and (min-width: 1025px)").matches){
        fixAsideScroll(sc);
    }
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
if (matchMedia("screen and (max-width: 1024px)").matches) {
    $('.fix-aside').css('display', 'block');
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
$('.visual-slider .slick-wrapper .slick-slide').eq(0).addClass('reset-animation');
$('.visual-slider .slick-wrapper').on('init', function (slick) {
    $('.visual-slider .slick-wrapper .slick-slide').eq(0).removeClass('reset-animation');
});

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
    autoplaySpeed: 2000,
    responsive: [{
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
    ],
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

// 모바일 slick
achievementsSlick();
function achievementsSlick(){
    if (!$('.achievements-list ul').hasClass('slick-slider') && matchMedia("screen and (max-width: 768px)").matches) {
        $('.achievements-list ul').slick({
            draggable: true,
            dots: false,
            infinite: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 6000,
        });
        // $('.achievements-list ul').on('afterChange', function (slick, currentSlide) {
        //     var idx = currentSlide.currentSlide;
        //     if (idx === 1) {
        //         achievementsAnimation();
        //     } else {
        //         clearInterval(achievementsInterval);
        //     }
        // })
    } else if ($('.achievements-list ul').hasClass('slick-slider')) {
        $('.achievements-list ul').slick('unslick');
    }
}

todayPopSlick();
function todayPopSlick(){
    if (!$('.today-pop-wrap .slick-wrapper').hasClass('slick-slider') && matchMedia("screen and (max-width: 1024px)").matches) {
        $('.today-pop-wrap .slick-wrapper').slick({
            draggable: false,
            dots: false,
            infinite: false,
        });
    } else if ($('.today-pop-wrap .slick-wrapper').hasClass('slick-slider')) {
        $('.today-pop-wrap .slick-wrapper').slick('unslick');
    }
}

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
    } else if (sc > 730 && matchMedia("screen and (max-width: 480px)").matches){
        $('.con2').addClass('move');
    }
}

function contentsMotion3(sc){
    if (sc > 1500) {
        $('.con3').addClass('move');
    } else if (sc > 1080 && matchMedia("screen and (max-width: 480px)").matches) {
        $('.con3').addClass('move');
    }
}

function contentsMotion4(sc){
    if(sc > 2259) {
        $('.con4').addClass('move');
    } else if (sc > 1650 && matchMedia("screen and (max-width: 480px)").matches) {
        $('.con4').addClass('move');
    }
}

function contentsMotion5(sc){
    if(sc > 3000) {
        $('.con5').addClass('move');
    } else if (sc > 2450 && matchMedia("screen and (max-width: 480px)").matches) {
        $('.con5').addClass('move');
    }
}

function boardMotion(sc){
    if(sc > 3568) {
        $('.board').addClass('move');
    } else if (sc > 3130 && matchMedia("screen and (max-width: 480px)").matches) {
        $('.board').addClass('move');
    }
}

// .achievements-list 장례수행실적 교차 fade in - out
//  if (matchMedia("screen and (min-width: 1024px)").matches){
//      achievementsAnimation();
//  }
//  var achievementsInterval;
// function achievementsAnimation() {
//     achievementsCross();
//     function achievementsCross() {
//         if ($('.js-cross-view span:first-child').css('opacity') === '0') {
//             $('.js-cross-view span:last-child').css('opacity', 0);
//             $('.js-cross-view span:first-child').css('opacity', '1');
//         } else {
//             $('.js-cross-view span:first-child').css('opacity', 0);
//             $('.js-cross-view span:last-child').css('opacity', 1);
//         }
//     }
    
//     achievementsInterval = setInterval(function () {
//         achievementsCross();
//     }, 3000); //교차 속도
// }

// today-pop 닫기 
function todayPopClose(btn){
    if (matchMedia("screen and (max-width: 1024px)").matches) {
        var slideCount = $('.today-pop').length;
        var thisIdx = $(btn).parents('.today-pop').index();
        $('.today-pop-wrap .slick-wrapper').slick('slickRemove',thisIdx);
        if (slideCount === 1) {
            $('.today-pop-wrap').hide();
        }
    } else {
        $(btn).parents('.today-pop').hide();
    }
}

// today-pop 닫기 click event
$('.today-pop .btn-close').on('click', function (e) {
    todayPopClose(e.target);
});


// today-pop 오늘하루 보지않기 check event
$('.today-pop .chk-wrap input').on('change', function(e){
    setCookieMobile(e.target.id, 'done', 1);
    todayPopClose(e.target);
});

// 모바일 today-pop slick에서 보지않기 설정된 슬라이드 지우기
if (matchMedia("screen and (max-width: 1024px)").matches){
    if ($('.today-pop-wrap .slick-slide').length <= 0 || !$('#jsToday01').is(':visible') && !$('#jsToday02').is(':visible')) {
        $('.today-pop-wrap').remove();
    } else if (!$('#jsToday01').is(':visible') && $('#jsToday02').is(':visible')) {
        if (!$('#jsToday01').length <= 0) {
            $('.today-pop-wrap .slick-wrapper').slick('slickRemove', 0);
        }
    } else if ($('#jsToday01').is(':visible') && !$('#jsToday02').is(':visible')) {
        if (!$('#jsToday02').length <= 0) {
            $('.today-pop-wrap .slick-wrapper').slick('slickRemove', 1);
        }
    }
}

$('.video-pop-wrap .btn-close-pop').on('click', function(){
    $(this).parents('.video-pop-wrap').remove();
});