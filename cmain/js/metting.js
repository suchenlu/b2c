$(document).ready(function(){
    //���Բ��������
    $(".float_window_menu").click(function(){
        if($(".float_window_menu li.put").css("display")=="none"){
            $(".float_window_menu li.put").show();
            $(".trangle").show();
        }else{
            $(".float_window_menu li.put").hide();
            $(".trangle").hide();
        }
    })


//��Ʒ·�ߺ�Ʒ���л�
    $(".product_line ul li").click(function(){
        if($(".product_line").css("overflow")=="hidden"){
            $(".product_line").css({"overflow":"visible"});
        }else{
            $(".product_line").css({"overflow":"hidden"});
        }
    })


    $(".city_list").slide({
        titCell:".hd ul li",
        mainCell:".bd ul",
        effect:"fade",
        trigger:"click"
    })
    $(".content_top1_left .better_choose").click(function(){
        if($(".content_top2").css("display")=="none"){
            $(".content_top2").css({"display":"block"});
            $(".content_top1 .content_top1_right").css({"display":"none"});
        }else{
            $(".content_top2").css({"display":"none"});
            $(".content_top1 .content_top1_right").css({"display":"block"});
        }
    })


//����߼�ɸѡ����ʽ�仯
    $(".content_top").slide({
        titCell:".content_top1_left p a",
        mainCell:"content_top2",
        effect:"fade",
        trigger:"click",
        targetCell:"on"
    })

//�����ĸ��ʽ�仯
    $(".content_top").slide({
        titCell:".foot p a",
        mainCell:".foot .body",
        effect:"fade",
        trigger:"click",
        targetCell:"on"
    })


//����߼�ɸѡ��Ӫ·�߸�ఴťʱ
    $(".group .group_first .foot .show_more").click(function(){
        if($(".group .group_first .body .items").css("height")=="40px"){
            $(".group .group_first .body .items").css({"height":"auto","max-height":"150px","overflow":"auto"});
            $(".group .group_first .foot p").css({"display":"block"});
            $(".group .group_first .foot .show_more").css({"visibility":"hidden"});
            $(".group .group_first .foot .show_less").css({"visibility":"visible"});
        }else{
            $(".group .group_first .body .items").css({"height":"40px","overflow":"hidden"});
            $(".group .group_first .foot p").css({"display":"none"});
            $(".group .group_first .foot .check").css({"display":"block"});
            $(".group .group_first .body .btn").css({"display":"none"});
            $(".group .group_first .foot .show_more").css({"visibility":"visible"});
            $(".group .group_first .foot .show_less").css({"visibility":"hidden"});
            $(".group .group_first .body .items").animate({scrollTop:0},0);
            $(".group .group_first .body .items .item input").css({"visibility":"hidden"});
        }
    })

//����߼�ɸѡ���ڵذ�ťʱ
    $(".group .group_second .foot .show_more").click(function(){
        if($(".group .group_second .body .items").css("height")=="40px"){
            $(".group .group_second .body .items").css({"height":"auto","max-height":"150px","overflow":"auto"});
            $(".group .group_second .foot .show_more").css({"visibility":"hidden"});
            $(".group .group_second .foot .show_less").css({"visibility":"visible"});
        }else{
            $(".group .group_second .body .items").css({"height":"40px","overflow":"hidden"});
            $(".group .group_second .foot .show_more").css({"visibility":"visible"});
            $(".group .group_second .foot .show_less").css({"visibility":"hidden"});
            $(".group .group_second .body .items").animate({scrollTop:0},0);
        }
    })

//gao ji s
    $(".group .group_first .foot .check").click(function(){
        if(($(".group .group_first .body .items").css("height")=="40px")||($(".group .foot p").css("display")=="block")){
            $(".group .group_first .body .items").css({"height":"auto","max-height":"150px","overflow":"auto"});
            $(".group .group_first .foot p").css({"display":"block"});
            $(".group .group_first .foot .check").css({"display":"none"});
            $(".group .group_first .body .btn").css({"display":"block"});
            $(".group .group_first .foot .show_more").css({"visibility":"hidden"});
            $(".group .group_first .foot .show_less").css({"visibility":"visible"});
            $(".group .group_first .body .items .item input").css({"visibility":"visible"});
        }else{
            $(".group .group_first .body .items").css({"height":"40px","overflow":"hidden"});
            $(".group .group_first .body p").css({"display":"none"});
            $(".group .group_second .foot .show_more").css({"visibility":"visible"});
            $(".group .group_second .foot .show_less").css({"visibility":"hidden"});
        }
    })

})

