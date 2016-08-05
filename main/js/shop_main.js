/**
 * Created by yuanshitianda on 2016/2/3.
 */
//$(document).ready(function(){
//  //���Բ��������
//  $(".float_window_menu").click(function(){
//      if($(".float_window_menu li.put").css("display")=="none"){
//          $(".float_window_menu li.put").show();
//          $(".trangle").show();
//      }else{
//          $(".float_window_menu li.put").hide();
//          $(".trangle").hide();
//      }
//  })
////����Ʒ·��������
//  $(".product_line p").click(function(){
//      if($(".product_line ul").css("display")=="none"){
//          $(".product_line ul").show();
//      }else{
//          $(".product_line ul").hide();
//      }
//  })
//
////����л�վ��������
//  $(".change_line p").click(function(){
//      if($(".city_list").css("display")=="none"){
//          $(".city_list").show();
//      }else{
//          $(".city_list").hide();
//      }
//  })
////��Ʒ·�ߺ�Ʒ���л�
//  $(".product_line ul li").click(function(){
//      if($(".product_line").css("overflow")=="hidden"){
//          $(".product_line").css({"overflow":"visible"});
//      }else{
//          $(".product_line").css({"overflow":"hidden"});
//      }
//  })
//

    $(".city_list").slide({
        titCell:".hd ul li",
        mainCell:".bd ul",
        effect:"fade",
        trigger:"click"
    })


//������banner������������ʾ�ڶ���
    $(function(){
        $(window).bind('scroll',function(){
            if($(document).scrollTop()>660){
                $(".float_window").show();
            }else{
                $(".float_window").hide();
            }
        })
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
})
	//banner开始
$(".slider").slide({
		titCell: ".slider_extra ul li",
		mainCell: ".slider_main",
		effect: "fade",
		autoPlay: true,
		delayTime: 1000,
      interTime: 6000
	})
