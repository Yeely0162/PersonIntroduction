function CloseWindows(e) {
    var hid =document.getElementById("Popimg_Box" + e)
    hid.style.visibility = "hidden";
}
function show(e) {
    var show = document.getElementById("Popimg_Box" + e)
    fadeIn(show);
        //判断屏幕宽度
        if (window.screen.width <= 600) {  //600及以下分辨率
            var position = show.offsetHeight + 1000;
                $('html').animate({scrollTop: position}, 700)
        }
}
//淡入特效
function fadeIn(elemt) {
    elemt.style.cssText = "visibility:visible;opacity:0;";
    var speed = 500; //执行总时间
    var timeSpeed = speed / 100; //速度

    var num = 0,opacNum;
    var timer = setInterval(function() {
        // 修改透明度
        opacNum = Number(elemt.style.opacity);
        elemt.style.opacity = opacNum + 0.01;

        num += timeSpeed;
        if(num >= speed) {
            clearInterval(timer);
            // elemt.TimerManager.isStart = false;
        }
    }, timeSpeed);
}
