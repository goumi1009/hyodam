// 가입상담신청 클릭 이벤트
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
    }, 6000); //교차 속도
}

// 고정 상담폼 실시간 상담내역 rolling
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