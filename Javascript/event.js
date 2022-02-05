document.onkeydown = function(){

    if(window.event && window.event.keyCode == 123) {
        //样式弹窗警告
        var elemt=document.createElement('span');
        elemt.innerText="不可以干坏事哦！"
        elemt.style="clear:both;z-index:9999999;" +
            "margin:auto;" +
            "top:5em;right:0;left:0;" +
            "background-color: #ffb9b9;width:16em;" +
            "height: 3em;align-items: center;" +
            "display: flex;border-radius:5px;" +
            "justify-content: center;" +
            "color: #1f1a1a;" +
            "position: fixed;"
        document.body.appendChild(elemt);
        setTimeout(function (){
            document.body.removeChild(elemt);
        },5000)//3秒后删除样式

        event.keyCode=0;
        event.returnValue=false;
    }
    if(window.event && window.event.keyCode == 13) {
        window.event.keyCode = 505;
    }
    if(window.event && window.event.keyCode == 8) {
        alert(str+"\n请使用Del键进行字符的删除操作！");
        window.event.returnValue=false;
    }
}
function topbutn() {
        $('#panel').slideToggle("slow");
}
//F12禁用
//图片解码成功显示
function InterCode(){
    var input=window.prompt("请输入密钥");
    if( input==="" || input==null )
    {
        alert("你没有输入任何文字");
    }
    else
    {
        var brkcode=uncompileStr("%7F%F2%ADgb");
        //密钥判断
        if(Boolean (input===brkcode))
        {
            var img =uncompileStr("%98%DC%E8%E4%E3%ADi%5E%A8%DE%CA%D1%E5%A9agh%60%95%D0%DD%DC%DD%D7%90%97%D8%9E%7F%B5%D7%E5%E2%DD%DE%D9%CC%D7%E9%E7%D7%94%9C%D2%93%9E%DE%D5");
            var intoHTML=document.getElementById("PersonPicture");
            intoHTML.src=(img);
        }
        else {
            alert("密钥不对！");
        }
    }


}

//字符串进行解密
function uncompileStr(code){
    code=unescape(code);
    var c=String.fromCharCode(code.charCodeAt(0)-code.length);
    for(var i=1;i<code.length;i++)
    {
        c+=String.fromCharCode(code.charCodeAt(i)-c.charCodeAt(i-1));
    }
    return c;
}