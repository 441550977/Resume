/**
 * Created by shuai on 2017/6/20.
 */
$(function(){
    var tempH = $(window).height(); //获取单页面高度
    work();
    $(window).resize(function(){ //当浏览器大小变化时
        tempH = $(window).height();//浏览器时下窗口可视区域高度
        work();
    });

    function work(){
        var $this = $('.box');
        $this.css('height',tempH+'px');//设置背景
        $('#bigbox').touchdirection(tempH,4);//滑动插件

        $(window).scroll(function(){//根据页面高度判断旋转
            var sctop = $(window).scrollTop();
            if(sctop >= tempH*0.9){
                $('#content img:eq(1),#content img:eq(2)').css('-webkit-transform','rotate(360deg)');//旋转动画
            }
            else{
                $('#content img:eq(1),#content img:eq(2)').css('-webkit-transform','rotate(0deg)');//旋转动画
            }
        });
    }

});