$(document).on('click', function(e){
    subDepthToggle(e.target);
});

// lnb sub depth
function subDepthToggle(btn){
    if($(btn).parent().hasClass('depth')){
        $(btn).toggleClass('open');
        $(btn).parent().siblings('li').find('button').removeClass('open');
    } else {
        $('.depth').each(function(){
            $(this).find('button').removeClass('open');
        });
    }
}
$('.lnb .depth button').on('click', function () {
});

// 활성화 tab 체크
function activeTabChk(){
    var idx, activeIdx;
    $('.tab-title input:radio').each(function () {
        idx = $(this).parent().index();
        if ($(this).is(':checked')) {
            activeIdx = $(this).parent().index();
        }
    });
    return activeIdx;
}

// tab content 활성화
function activeTabCon(num){    
    $('.tab-con article').eq(num).siblings().removeClass('active');
    $('.tab-con article').eq(num).addClass('active');
}
activeTabCon(activeTabChk());

// tab 변경 event
$('.tab-title input:radio').on('change', function () {
    var idx = $(this).parent().index();
    activeTabCon(idx);

    if (matchMedia("screen and (max-width: 1024px)").matches){
        $(this).parents('.tab-title').slideUp();
        $('.btn-tab-select').text($(this).next().text());
        $('.btn-tab-select').removeClass('active');
    }
});

// header style
$('.header').addClass('fix');

// 가입상담 신청 버튼
$('.fix-aside').css('display', 'block');

// 모바일 tab select로 변경
if (matchMedia("screen and (max-width: 1024px)").matches && $('.tab-title').is(':visible')) {
    var activeTab = $('.tab-title li').eq(activeTabChk()).find('label').text();
    $('.tab-title').before('<button class="btn-tab-select">'+ activeTab +'</button>');
    $('.tab-title').hide();
    $('.btn-tab-select').on('click', function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    });
}

// 상품안내 링크
productLinkChk()
function productLinkChk(){
    if ($('.content-container').hasClass('product')){
        if (location.hash === '#eHD90'){
            $(".tab-title #tab-title01").prop('checked', true);
            activeTabCon(activeTabChk());
            if (matchMedia("screen and (max-width: 1024px)").matches) {
                $('.btn-tab-select').text('e효담90 무빈소 간소한 장례');
            }
        } else if (location.hash === '#eHD139') {
            $(".tab-title #tab-title02").prop('checked', true);
            activeTabCon(activeTabChk());
            if (matchMedia("screen and (max-width: 1024px)").matches) {
                $('.btn-tab-select').text('e효담139 알뜰한 실속 장례');
            }
        } else if (location.hash === 'all') {
            $(".tab-title #tab-title03").prop('checked', true);
            activeTabCon(activeTabChk());
            if (matchMedia("screen and (max-width: 1024px)").matches) {
                $('.btn-tab-select').text('전체상품');
            }
        }
    }
}