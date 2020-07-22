// 스크롤 header 스타일 변경
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    headerChange(sc);
});

function headerChange(sc){
    if (sc > 100) {
        $('.header').addClass('fix');
    } else {
        $('.header').removeClass('fix');
    }
}

// 로고 교차 fade in - out
logoAnimation();
function logoAnimation(){
    LogoIn();
    function LogoIn(){
        if ($('.logo div img:first-child').css('opacity') === '0') {
            $('.logo div img:last-child').css('opacity',0);
            $('.logo div img:first-child').css('opacity','1');
        } else {
            $('.logo div img:first-child').css('opacity', 0);
            $('.logo div img:last-child').css('opacity', 1);
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
        var first = $('.consulting-list .list-body').children().first();
        $('.consulting-list .list-body').append(first);
    }, 3000);
}