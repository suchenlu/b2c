//头部登陆后状态
$(".nav_right .After_landing a").click(function() {
		$(".nav_right .After_landing").toggleClass("hei_class")
	})
	$(".float_window_right .After_landing a").click(function() {
		$(".float_window_right .After_landing").toggleClass("hei_class")
	})
	//inrfo
$(function() {
		$(".nav_left ul li.show_info").hover(function() {
			$(".nav_left ul li .popup").show()
		}, function() {
			$(".nav_left ul li .popup").hide();
		})
	})
		//滚动到banner搜索浮动框显示在顶部
				$(function() {
					$(window).bind('scroll', function() {
						if ($(document).scrollTop() > 660) {
							$("#float_window").show();
							$(".sidebar").addClass("top_h")
						} else {
							$("#float_window").hide();
							$(".sidebar").removeClass("top_h")
						}
					})
				})
	//banner开始
$(".slider").slide({
		titCell: ".slider_extra ul li",
		mainCell: ".slider_main",
		effect: "fold",
		autoPlay: true
	})
	//banner结束

//主体内容title默认样式
$(document).ready(function() {
			//		周边处境各种游切换
		$(".short_line_mainRight").slide({
				titCell: ".menu li",
				mainCell: ".line_main",
				effect: "fade"
			})
			//滚动到banner搜索浮动框显示在顶部
		$(function() {
			$(window).bind('scroll', function() {
				if ($(document).scrollTop() > 660) {
					$("#float_window").show();
					$(".sidebar").addClass("top_h")
				} else {
					$("#float_window").hide();
					$(".sidebar").removeClass("top_h")
				}
			})
		})
		//精选品牌切换
		$(".brand_shop").slide({
			titCell: ".hdr ul li",
			mainCell: ".bdr",
			trigger: "mouseover",
			targetCell: "on"
		})

		//游客导航个人中心弹出框
		$(".my_content").click(function() {
			if ($(".my_news").css("display") == "none") {
				$(".my_news").show();
			} else {
				$(".my_news").hide();
			}
		})

	})
	//瀑布流
$(function() {
	setTimeout(function() {
		$('#content').masonry({
			itemSelector: '.post',
			columnWidth: 2
		});
	}, 100)
});
//搜索框叉号
function hHb() {
	var Close = $("#closes").val();
	if (Close !== "") {
		$(".close_fh").show()
	} else {
		$(".close_fh").hide()
	}
	$(".close_fh").click(function() {
		$("#closes").val("");
		$(this).hide()
	})
}
//左侧悬浮窗
function aScroll() {
	$("#leftnav a").click(function() {
		var hrefTxt = $(this).attr("data-href");
		var hrefDom = $(hrefTxt);
		var hrefTop = hrefDom.offset().top - 80;
		$("html, body").animate({
			scrollTop: hrefTop
		}, 500);
	})
}
aScroll();

function navFixed() {
	var scrollTopHeight = $(window).scrollTop();
	var topHeight = 600;
	var fixedDom = $("#leftnav");
	var fixedClass = "fixed_tit";
	if (scrollTopHeight > topHeight) {
		fixedDom.addClass(fixedClass);
	} else {
		fixedDom.removeClass(fixedClass);
	};
}

function scrollNav() {
	var arr = [];
	var scrollDom = $(".content_same");
	var navDom = $("#leftnav li");
	var newClass = "on";
	scrollDom.each(function() {
		arr.push([$(this).offset().top, $(window).scrollTop() + 100]);
	})
	for (i = arr.length; i >= 1; i--) {
		if (arr[i - 1][0] < arr[i - 1][1]) {
			navDom.eq(i - 1).addClass(newClass).siblings().removeClass(newClass);
			break;
		}
	}
};
navFixed();
scrollNav();
$(window).scroll(function() {
	navFixed();
	scrollNav();
});
//右侧侧边栏
// $(".backTop").click(function() {
// 	$('body,html').animate({
// 		scrollTop: 0
// 	}, 1000);
// 	return false;
// });
// $(".open").click(function() {
// 	$(".sidebar_1").toggle();
// 	$(".sidebar .contentBOX ul li.open a").toggleClass("a_2");
// });