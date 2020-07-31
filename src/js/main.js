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


$(window).resize(function(){
    todayPopSlick();
    useStepSlick();
    achievementsSlick()
});

achievementsSlick();
function achievementsSlick(){
    if (!$('.achievements-list ul').hasClass('slick-slider') && matchMedia("screen and (max-width: 768px)").matches) {
        $('.achievements-list ul').slick({
            draggable: true,
            dots: false,
            infinite: false,
            arrows: false,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 4000,
        });
    } else if ($('.achievements-list ul').hasClass('slick-slider')) {
        $('.achievements-list ul').slick('unslick');
    }
}

useStepSlick();
function useStepSlick(){
    if (!$('.contents.con5 ol').hasClass('slick-slider') && matchMedia("screen and (max-width: 480px)").matches) {
        $('.contents.con5 ol').slick({
            draggable: false,
            dots: false,
            arrows: false,
            slidesToShow: 2,
        });
    } else if ($('.contents.con5 ol').hasClass('slick-slider')) {
        $('.contents.con5 ol').slick('unslick');
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

// today-pop 닫기
$('.today-pop .btn-close').on('click', function () {
    if (matchMedia("screen and (max-width: 1024px)").matches) {
        var slideCount = $('.today-pop').length;
        var thisIdx = $(this).parents('.today-pop').index();
        $('.today-pop-wrap .slick-wrapper').slick('slickRemove',thisIdx);
        if (slideCount === 1) {
            $('.today-pop-wrap').hide();
        }
    } else {
        $(this).parents('.today-pop').hide();
    }
});

// today-pop 오늘하루 보지않기 
$('.today-pop .chk-wrap input').on('change', function(){
    $(this).parents('.today-pop').hide();
    setCookie('notToday', 'Y', 1);
});

function setCookie(cookieName, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var cookieValue = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toGMTString());
    document.cookie = cookieName + "=" + cookieValue;
}

function deleteCookie(cookieName) {
    var expireDate = new Date();
    expireDate.setDate(expireDate.getDate() - 1);
    document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
}

function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if (start != -1) {
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}