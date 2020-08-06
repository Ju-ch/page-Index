// $(function(){
//     function timer(settings){
//         var config = {
//             endDate: '2026-05-19 09:00',
//             timeZone: 'Europe/Dublin',
//             hours: $('#hours'),
//             minutes: $('#minutes'),
//             seconds: $('#seconds'),
//             newSubMessage: 'and should be back online in a few minutes...'
//         };
//         // 时间格式 00:00:00
//         function prependZero(number){
//             return number < 10 ? '0' + number : number;
//         }
//         $.extend(true, config, settings || {});
//         var currentTime = moment();
//         var endDate = moment.tz(config.endDate, config.timeZone);
//         var diffTime = endDate.valueOf() - currentTime.valueOf();
//         var duration = moment.duration(diffTime, 'milliseconds');
//         var days = duration.days();
//         var interval = 1000;
//         var subMessage = $('.sub-message');
//         var clock = $('.clock');
//         if(diffTime < 0){
//             endEvent(subMessage, config.newSubMessage, clock);
//             return;
//         }
//         if(days > 0){
//             $('#days').text(prependZero(days));
//             $('.days').css('display', 'inline-block');
//         }
//         var intervalID = setInterval(function(){
//             duration = moment.duration(duration - interval, 'milliseconds');
//             var hours = duration.hours(),
//                 minutes = duration.minutes(),
//                 seconds = duration.seconds();
//             days = duration.days();
//             if(hours  <= 0 && minutes <= 0 && seconds  <= 0 && days <= 0){
//                 clearInterval(intervalID);
//                 endEvent(subMessage, config.newSubMessage, clock);
//                 window.location.reload();
//             }
//             if(days === 0){
//                 $('.days').hide();
//             }
//             $('#days').text(prependZero(days));
//             config.hours.text(prependZero(hours));
//             config.minutes.text(prependZero(minutes));
//             config.seconds.text(prependZero(seconds));
//         }, interval);
//     }
//     function endEvent($el, newText, hideEl){
//         $el.text(newText);
//         hideEl.hide();
//     }
//     timer();
// });


$(function(){
    function countTime() {  
        //获取当前时间  
        var date = new Date();  
        var now = date.getTime();  
        //设置开始时间  
        var str="2020/02/09 00:00:00";
        var endDate = new Date(str); 
        var end = endDate.getTime();  
        
        // 计时  
        var leftTime = now - end; 
        // 倒计时
        // var leftTime = end - now; 
        
        //定义变量 d,h,m,s保存倒计时的时间  
        var d,h,m,s;  
        if (leftTime>=0) {  
            d = Math.floor(leftTime/1000/60/60/24);  
            h = Math.floor(leftTime/1000/60/60%24);  
            m = Math.floor(leftTime/1000/60%60);  
            s = Math.floor(leftTime/1000%60);                     
        }
        //将0-9的数字前面加上0，例1变为01
        d = checkTime(d);
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        function checkTime(number){
            return number < 10 ? '0' + number : number;
        }

        //将倒计时赋值到div中
        document.getElementById("DAYS").innerHTML = d;
        document.getElementById("HOURS").innerHTML = h;
        document.getElementById("MINUTES").innerHTML = m;
        document.getElementById("SECONDS").innerHTML = s;
        //递归每秒调用countTime方法，显示动态时间效果
        setTimeout(countTime,1000);
    }
    countTime();
});