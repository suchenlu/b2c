$(function() {
	//浮动导航
	function aScroll() {
		$("#leftnav a,#leftnav1 a,a.see_about").click(function() {
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
		var topHeight = 735;
		var fixedDom = $("#leftnav");
		var fixedClass = "fixed_tit";
		var fixedDom2 = $(".theme_nav");
		var fixed2Class = "fixed_tit2";
		if (scrollTopHeight > topHeight) {
			fixedDom2.addClass(fixed2Class);
			fixedDom.addClass(fixedClass);
		} else {
			fixedDom2.removeClass(fixed2Class);
			fixedDom.removeClass(fixedClass);
			$("#leftnav1 li").removeClass("on2")
			$("#leftnav li").removeClass("on")
		};
	}

	function scrollNav() {
		var arr = [];
		var scrollDom = $(".theme_same");
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

	function scrollNav2() {
		var arr2 = [];//定义默认空数组
		var scrollDom2 = $(".theme_same");  //页面滚动元素，页面上有很多个大模块
		var navDom2 = $("#leftnav1 li");  //导航对应元素
		var new2Class = "on2";  //当前导航项高亮状态的class名
		scrollDom2.each(function() {//循环所有页面模块元素
			arr2.push([$(this).offset().top, $(window).scrollTop() + 100]);//将所有页面元素对应的页面位置及窗口滚动高度加入数组
		})
		for (i = arr2.length; i >= 1; i--) {//遍历数组条数
			if (arr2[i - 1][0] < arr2[i - 1][1]) {
				navDom2.eq(i - 1).addClass(new2Class).siblings().removeClass(new2Class);
				break;
			}
		}
	}
	var footerSet = $("#footerHideSideBar").offset().top;
	navFixed();
	scrollNav();
	scrollNav2();
	$(window).scroll(function() {
		navFixed();
		scrollNav();
		scrollNav2();
		var wSH = $(window).scrollTop() + 420;
		if(wSH > footerSet){
			$("#leftnav").hide();
		}else{
			$("#leftnav").show();
		}
	});
})
$(function() {
		//slide轮播
		$("#theme_4").slide({
			titCell: '.theme_1_n ul li',
			mainCell: '.theme_4_1 ul',
			effect: "fade"
		});
		$(".twos").slide({
			mainCell: ".bd ul",
			titCell: ".hd ul li",
			scroll: 1,
			vis: 3,
			effect: "leftLoop",
			trigger: "click"
		});
		$(".authentication_zy i").click(function() {
				$(".aut_abs").slideToggle();
				$(this).toggleClass("_show")
			})
			///订单详情页
		$(".banner_xq_top a").click(function() {
			$("._no_sales").toggle()
		});
	})
	//可信网站图片LOGO安装开始
	$(function() {
		var _kxs = document.createElement('script');
		_kxs.id = 'kx_script';
		_kxs.async = true;
		_kxs.setAttribute('cid', 'kx_verify');
		_kxs.src = ('https:' == document.location.protocol ? 'https://ss.knet.cn' : 'http://rr.knet.cn') + '/static/js/icon3.js?sn=e15020611010557644yqeu000000&tp=icon3';
		_kxs.setAttribute('size', 0);
		var _kx = document.getElementById('kx_verify');
		_kx.parentNode.insertBefore(_kxs, _kx);
	});

诚信网站图片LOGO安装开始
$(function() {
	document.getElementById('___szfw_logo___').oncontextmenu = function() {
		return false;
	}
});

////
