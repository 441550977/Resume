/**
 * Created by shuai on 2017/6/19.
 */
(function($){
    $.fn.extend({
       'touchdirection':function(){
        var me = $(this);

        var evestar,evemove,eveend;
        if('ontouchstart' in window){
            evestar = 'touchstart';
            evemove = 'touchmove';
            eveend = 'touchend';
            }
        else{
            evestar = 'mousedown';
            evemove = 'mousemove';
            eveend = 'mouseup';
            }

            var p1,p2,time1,time2;//坐标点，时间差
            me.on(evestar,startfn);
            me.on(eveend,endfn);

        function startfn(e){
            p1 = getxy(e);
            time1 = Date.now();}//开始时间

        function endfn(e){//执行value改变
            p2 = getxy(e);
            time2 = Date.now();//开始时间

            if(p2.X)
            {
                movel = Math.sqrt(Math.abs((p2.X-p1.X)*(p2.X-p1.X)+(p2.Y-p1.Y)*(p2.Y-p1.Y)));//移动距离
                motime = time2-time1;//移动时间
                movetr = Math.atan2(p2.X-p1.X,p2.Y-p1.Y)*180/Math.PI;//移动方向

            if(motime<500&&movel>5){//移动距离时间都够的情况
                if(movetr <= -135||movetr > 135){
                   me.html('向上滑动');
                }
                else if(-45 >= movetr&&movetr > -135){
                    me.html('向左滑动');
                }
                else if(45 >= movetr&&movetr > -45){
                    me.html('向下滑动');
                }
                else if(135 >= movetr&&movetr > 45)
                {
                    me.html('向右滑动');
                }
                }
            }
                e.preventDefault();
        }

        function getxy(e){
            var p = e.touches[0] || e.changedTouches[0];
            p.X = p.clientX;//x起始坐标
            p.Y = p.clientY;//y起始坐标
            return p;}

        }
        })
})(jQuery);