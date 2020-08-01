$(document).on('click', function(e){
    subDepthToggle(e.target);
});

// lnb sub depth
function subDepthToggle(btn){
    console.log($(btn).parent().hasClass('depth'))
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

// tab
$('.tab-title input:radio').each(function () {
    var idx = $(this).parent().index();
    if ($(this).is(':checked')) {
        $('.tab-con article').eq(idx).siblings().removeClass('active');
        $('.tab-con article').eq(idx).addClass('active');
    }
});
$('.tab-title input:radio').on('change', function () {
    var idx = $(this).parent().index();
    $('.tab-con article').eq(idx).siblings().removeClass('active');
    $('.tab-con article').eq(idx).addClass('active');
});

// header style
$('.header').addClass('fix');

// 가입상담 신청 버튼
$('.fix-aside').css('display', 'block');