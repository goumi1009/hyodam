// lnb sub depth
$('.lnb .depth button').on('click', function () {
    $(this).toggleClass('open');
});

// tab
$('.tab-title input:radio').each(function () {
    var idx = $(this).parent().index();
    if ($(this).is(':checked')) {
        $('.tab-con article').eq(idx).siblings().removeClass('active');
        $('.tab-con article').eq(idx).addClass('active');
        console.log('ddd');
    }
});
$('.tab-title input:radio').on('change', function () {
    var idx = $(this).parent().index();
    $('.tab-con article').eq(idx).siblings().removeClass('active');
    $('.tab-con article').eq(idx).addClass('active');
    console.log('ddd');
});

// header style
$('.header').addClass('fix');

// 가입상담 신청 버튼
$('.fix-aside').css('display', 'block');