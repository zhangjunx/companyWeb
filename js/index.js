$(function() {
//     var item = 0;
//     var lis = $(".circle li").length;
//     var timer = setInterval(function() {
//         moveNext();
//     }, 2000)

//     $(".banner").hover(function() {
//             clearInterval(timer);
//             $("#prev").css("display", "inline-block");
//             $("#next").css("display", "inline-block");
//         }, function() {
//             timer = setInterval(moveNext, 2000);
//             $("#prev").css("display", "none");
//             $("#next").css("display", "none");
//         })
//         //   箭头控制轮播图
//     $("#prev").click(function() {
//         movePrev();
//     });
//     $("#next").click(function() {
//             moveNext();
//         })
//         // 自动播放下一张
//     function moveNext() {
//         item++;
//         if (item == lis) {
//             item = 0;
//         }
//         $(".swiper").css({
//             "left": -1903 * item + "px",
//         })
//         $(".circle li").eq(item).addClass("current").siblings().removeClass("current");
//     }
//     //  播放上一张
//     function movePrev() {
//         item--;
//         if (item == -1) {
//             item = lis - 1;
//         }
//         $(".swiper").css({
//             "left": -1903 * item + "px",
//         })
//         $(".circle li").eq(item).addClass("current").siblings().removeClass("current");
//     }

    //点击软件平台入口 中兴铸业
    $("#li1").click(function() {
            window.open("https://www.p7k.top/SyrisFactory/login.html");
        })
        //点击软件平台入口 玺瑞云智慧物联网平台
    $("#li2").click(function() {
            window.open("https://www.p7k.top/LoveHome/");
        })
        //点击软件平台入口 智慧监狱
//  $("#li3").click(function() {
//      window.open("https://www.p7k.top/PrsionIOT/login.html");    
//  })

    // // 指示器控制轮播图
    // $(".circle li").click(function() {
    //     $(this).addClass("current").siblings().removeClass("current");
    //     item = $(this).index();
    //     $(".swiper").css({
    //         "left": -1903 * item + "px",
    //     })
    // })
	
	
	//主页顶部菜单hover
	$(".menu-list .menu-item").hover(function(){
		$(".menu-item").eq(0).removeClass("menu-active");
	},function(){
		$(".menu-item").eq(0).addClass("menu-active");
	})

   
	//layui轮播插件
	layui.use('carousel', function(){
	  var carousel = layui.carousel;
	  //建造实例
	  carousel.render({
	    elem: '#test1',
	    width: '100%', //设置容器宽度
		height:"615px",
	    arrow: 'always' ,//始终显示箭头
	    //,anim: 'updown' //切换动画方式
	  });
	});
})
/* 无缝滚动 */
$(".scene-box").slide({mainCell:".scene-main .solution-box",effect:"leftLoop",autoPlay:true,vis:3});

