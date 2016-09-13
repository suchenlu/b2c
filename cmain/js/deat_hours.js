waitingSecond = 60;                                                      
function showTime()                                                      
{                                                              
    waitingSecond -= 1;                                                  
    $('#muserv1_code').val(waitingSecond + "秒后重新发送");              
    $('#muserv1_code').addClass('on');                                   
    $('#muserv1_code').attr('disabled','disabled');            
    if (waitingSecond == 0)                                              
    {                                                                    
        stopClock();                                                     
        return;                                                          
    }                                                                    
    setTimeout("showTime()",1000);                             
}                                                                 
                                                                         
function stopClock()                                                     
{                                                                 
    waitingSecond = 60;                                                  
    $('#muserv1_code').val('重新获取');                                
//  $("#muserv1_code").removeClass("bggary").addClass("bgblue");         
//  $("#userPhone").removeAttr("disabled");                              
    $("#muserv1_code").removeAttr("disabled");                           
    $('#muserv1_code').removeClass('on');                                
}                                                                
$(document).ready(function() {
    //设置密码是否显示
    $("#passWordImg").click(function() {
        if ($("#passWordImg").attr("src") == 'images/OpenEyes.png') {
            $("#passWordImg").attr('src', 'images/closeEyes.png');
            $("#password").attr("type", "password");
        } else {
            $("#passWordImg").attr('src', 'images/OpenEyes.png');
            $("#password").attr("type", "text");
        }
    });

});
$("#muserv1_code").click(function() {
	showTime();
})