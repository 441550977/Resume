/**
 * Created by shuai on 2017/6/19.
 */
(function($){
    $.fn.extend({
       'touchdirection':function(tempH,num){
        var me = $(this);

        var evestar,evemove,eveend,temp= 0;//temp页面top距离变量
        if('ontouchstart' in window){//适配mouse事件和touch事件
            evestar = 'touchstart';
            evemove = 'touchmove';
            eveend = 'touchend';
            }
        else{
            evestar = 'mousedown';
            evemove = 'mousemove';
            eveend = 'mouseup';
            }
            var p1,p2,time1,time2;//触摸坐标点，时间差
            me.on(evestar,startfn);
            me.on(evemove,movefn);
            me.on(eveend,endfn);

        function startfn(e){
            p1 = getxy(e);
            time1 = Date.now();}//触摸开始时间
        function movefn(e){
            e.preventDefault();
        }
        function endfn(e){//
            p2 = getxy(e);
            time2 = Date.now();//触摸结束时间

            if(p2.X)
            {
                movel = Math.sqrt(Math.abs((p2.X-p1.X)*(p2.X-p1.X)+(p2.Y-p1.Y)*(p2.Y-p1.Y)));//触摸距离
                motime = time2-time1;//触摸时间
                movetr = Math.atan2(p2.X-p1.X,p2.Y-p1.Y)*180/Math.PI;//触摸移动方向

            if(motime<500&&movel>5){//触摸距离时间都够的情况
                if(movetr <= -135||movetr > 135){
                   if(temp >= 0)
                   {
                       temp++;
                   }
                   else{

                   }
                }
                else if(-45 >= movetr&&movetr > -135){}
                else if(45 >= movetr&&movetr > -45){
                    if(temp <= num*tempH)
                    {
                        temp--;
                    }
                    else{}
                }
                else if(135 >= movetr&&movetr > 45) {}//左滑右滑

                if(temp < 0)temp=0;
                if(temp > num-1){
                    temp = num-1;
                    $('div#colla').removeClass('collapse');
                    }

                if(temp){
                    $('#content img').eq(temp).css('-webkit-transform','rotate(360deg)');//控制元素旋转
                }
                else{
                    $('#content img').css('-webkit-transform','rotate(0deg)');//控制元素旋转
                }
                me.animate({top:-(temp*tempH)+"px"},300)//控制元素滑动top值改变
                }
            }
        }

        function getxy(e){//获取坐标函数
            var p = e.touches[0] || e.changedTouches[0];
            p.X = p.clientX;
            p.Y = p.clientY;
            return p;
        }
        }
    })
})(jQuery);