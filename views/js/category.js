$(function () {
    // 模拟点击一次tab_title
  
    $('.tab_title ul').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active')
        const index = $(this).index();
        $('.tab_content li').eq(index).show().siblings('li').hide();
    })
    $('.active').click();

})