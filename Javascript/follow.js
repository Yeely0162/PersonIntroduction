
$(function(){
    //--------------------------//调整Top画布大小----------------
    var height =document.getElementById("Head_Box");
    var ScreenWidth=window.screen.width;
    var ScreenHeight = window.screen.availHeight;
        if (ScreenWidth>700) {
            height.style.height = (ScreenHeight - 103) + "px";
            if (ScreenHeight - 103 > 800) {
                document.getElementById("ball").style.marginTop += 5 + "vh"
                document.getElementById("star").style.marginTop += 5 + "vh"
            }
        }
        else{
            height.style.height = (ScreenHeight +103) + "px";
            document.getElementById("ball").style.marginTop =(ScreenHeight )-510 +"px";
            document.getElementById("ball").style.marginLeft =(document.getElementById("ball").clientLeft)-60+"px";
            for (var i = 0; i < 3; i++) {
                document.getElementsByClassName("star")[i].style.marginTop=(ScreenHeight )-518 +"px";
                document.getElementsByClassName("star")[i].style.marginLeft =(document.getElementsByClassName("star")[i].clientLeft)-75+"px";
            }
        }
    // -------------------------------------------
    var oUl=document.getElementById('head_text'),
        l = oUl.offsetWidth/2,
        t = oUl.offsetHeight/2,
        aLi=document.getElementsByTagName('li');
    oUl.onmousemove = function( ev ){
        var oEv = ev || event,
            Ex = oEv.clientX,
            Ey = oEv.clientY;

        for(var i=0; i<aLi.length; i++){
            aLi[i].style.marginLeft=(Ex - l )/90*aLi[i].style.zIndex+'px';//计算偏移位置X
            aLi[i].style.marginTop=(Ey - t )/70*aLi[i].style.zIndex+'px';//计算偏移位置Y
        }
    }
});
//若目标中没有z-index的话无法使用

