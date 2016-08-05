/**
 * Created by yuanshitianda on 2016/2/3.
 */
$(document).ready(function(){
//��Ʒ·�ߺ�Ʒ���л�
    $(".product_line ul li").click(function(){
        if($(".product_line").css("overflow")=="hidden"){
            $(".product_line").css({"overflow":"visible"});
        }else{
            $(".product_line").css({"overflow":"hidden"});
        }
    })



    //�������logo������
    $(".shop_logo>a:first").hover(function(){
        if($(".shop_logo_news").css("display")=="none"){
            $(".shop_logo_news").show();
        }else{
            $(".shop_logo_news").hide();
        }
    })


    //������Ϣ����˾��Ϣ�༭��ʾ��
    $(".storeInformation_main a").click(function(){
        if($(".storeInformation_main_after").css("display")=="none"){
            $(".storeInformation_main_before").hide();
            $(".storeInformation_main_after").show();
            $(".conpanyInformation_title span").css({"border":"1px solid #555","border-bottom":"none","height":"31px","background-color":"#fff"});
        }else{
            $(".storeInformation_main_before").show();
            $(".storeInformation_main_after").hide();
            $(".conpanyInformation_title span").css({"height":"30px","border":"none"});
        }
    })





    $(".scl_storeDoor_content").find(".scl_storeDoor_main").each(function(i){
        if(i%2==0){
            $(this).css({"background-color":"#f6f6f6"});
        }else{
            $(this).css({"background-color":"#efeeee"});
        }
    })
})


//�ֲ�Ч��


//$(document).ready(function() {
//    $(".inner>li:not(:first)").css("display", "none");
//    var b0 = $(".inner>li:last");
//    var c0 = $(".inner>li:first");
//    setInterval(function () {
//        if (b0.is(":visible")) {
//            c0.fadeIn(300).addClass("in");
//            b0.hide();
//        } else {
//            $(".inner>li:visible").addClass("in");
//            $(".inner>li.in").next().fadeIn(300);
//            $(".inner>li.in").hide().removeClass("in");
//        }
//    }, 3000)
//})




//���������Ϣ��������Ӧ��



//��������һ���߶�ʱ�ö���ť��ʾ
$(function(){
    $(window).bind('scroll',function(){
        if($(document).scrollTop()>1000){
            $(".scl_toTop").show();
        }else{
            $(".scl_toTop").hide();
        }
    })
    $('.scl_toTop').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});
})


//$(".scl_store_down").animate({
//    opacity:"1"
//},5000);
