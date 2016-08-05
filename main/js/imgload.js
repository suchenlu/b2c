var t_img; // 定时器
var isLoad = true; // 控制变量
isImgLoad(function() {
	// 加载完成
	var liHei = $(".brand_shop ul li").height()/2;
		var thisHei =$(".brand_shop ul li a img").height()/2;
		var leftHei =$(".left_logo ul li a img").height()/2;
		var cenLogo = $(".center_logo").height()/2;
		var cenImg = $(".center_logo img").height()/2;
			$(".brand_shop ul li a img").css("margin-top",liHei-thisHei);
			$(".left_logo li a img,.right_logo li a img").css("margin-top",liHei-leftHei);
			$(".center_logo img").css("margin-top",cenLogo-cenImg);
});
// 判断图片加载的函数
function isImgLoad(callback) {
	// 注意我的图片类名都是cover，因为我只需要处理cover。其它图片可以不管。
	// 查找所有封面图，迭代处理
	$('.imgload_js').each(function() {
		// 找到为0就将isLoad设为false，并退出each
		if (this.height === 0) {
			isLoad = false;
			return false;
		}
	});
	// 为true，没有发现为0的。加载完毕
	if (isLoad) {
		clearTimeout(t_img); // 清除定时器
		// 回调函数
		callback();
		// 为false，因为找到了没有加载完成的图，将调用定时器递归
	} else {
		isLoad = true;
		t_img = setTimeout(function() {
			isImgLoad(callback); // 递归扫描
		}, 500); // 我这里设置的是500毫秒就扫描一次，可以自己调整
	}
}