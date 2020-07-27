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