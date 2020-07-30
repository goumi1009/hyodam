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

// 해상도 분기
if (matchMedia("screen and (max-width: 1024px)").matches) { // 1024 이하
    $('.btn-menu').on('click', function(){
        $('.header').toggleClass('active');
        $('html').toggleClass('dimd');
    });
} else { // 1024 초과
    // gnb hover
    $('.gnb').on({
        mouseenter: function () {
            $('.header').addClass('open');
        },
        mouseleave: function () {
            $('.header').removeClass('open');
        }
    });
}

// 팝업 열기 클릭이벤트
$('.btn-popup').on('click',function(e){
    e.preventDefault();
    var name = $(this).data('popName'); // data-pop-name속성값 = 파일명
    popupLoad(name);
});

// popup
function popupLoad(name){
    var popup = '<div class="pop-wrap"></div>';
    $('body').append(popup);
    $('html').addClass('dimd');
    $('.pop-wrap').load('layer/'+ name +'.html',function(){
        // 팝업 닫기 클릭이벤트
        $('.btn-close-pop').on('click', function () {
            var popup = $(this).parents('.pop-wrap');
            popup.remove();
            $('html').removeClass('dimd');
        });
    });
}
