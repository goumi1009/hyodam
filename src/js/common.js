// scroll event
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    headerChange(sc);
    fixAsideScroll(sc);
});

// 스크롤 header 스타일 변경
function headerChange(sc){
    if (sc > 100) {
        $('.header').addClass('fix');
    } else {
        $('.header').removeClass('fix');
    }
}

// 가입상담신청 고정 버튼
function fixAsideScroll(sc){
    if (sc > 600) {
        $('.fix-aside').css('display','block');
    } else {
        $('.fix-aside').css('display', 'none');
    }
}


fixAsideToggle();
function fixAsideToggle(){
    $('.btn-consulting').click(function () {
        $(this).parent('.fix-aside').toggleClass('open');
    });
}

// 로고 교차 fade in - out
logoAnimation();
function logoAnimation(){
    LogoIn();
    function LogoIn(){
        if ($('.header .logo img:first-child').css('opacity') === '0') {
            $('.header .logo img:last-child').css('opacity',0);
            $('.header .logo img:first-child').css('opacity','1');
        } else {
            $('.header .logo img:first-child').css('opacity', 0);
            $('.header .logo img:last-child').css('opacity', 1);
        }
        
    }
    setInterval(function () {
        LogoIn();
    }, 6000);
}

// 실시간 상담내역 rolling
tableRolling();
function tableRolling(){
    setInterval(function () {
        var first = $('.visual .consulting-list .list-body').children().first();
        first.addClass('hide', backAppend(first));
    }, 3000);
    function backAppend(first){
        var firstEl = first;
        setTimeout(function(){
            $('.visual .consulting-list .list-body').append(firstEl);
            $('.visual .consulting-list .list-body li').removeClass('hide');
        },500, firstEl)
    }
}
tableRolling2();
function tableRolling2(){
    setInterval(function () {
        var first = $('.fix-aside .consulting-list .list-body').children().first();
        first.addClass('hide', backAppend(first));
    }, 3000);
    function backAppend(first){
        var firstEl = first;
        setTimeout(function(){
            $('.fix-aside .consulting-list .list-body').append(firstEl);
            $('.fix-aside .consulting-list .list-body li').removeClass('hide');
        },500, firstEl)
    }
}