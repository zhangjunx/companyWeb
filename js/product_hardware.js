$(function() {

    })
    //点击核心硬件下的选项
$(document).on("click", ".threeMenu li", function() {
    $(this).addClass("current").siblings().removeClass("current");
    $(".hardware ul").eq($(this).index()).show().siblings().hide();
})