var i=0;
var number;
Vue.prototype.$http=axios;
function  randomnumber(){
     number = Math.floor(Math.random() * (90 - 20 + 1)) + 20;//在20-50区间随机
}
var vm =new Vue({
    el:'#music',
    data:{
        list:[],
        content:"",
        likedCount:"",
        avatarUrl:"",
        nickname:"",
        show:true,
    },
    //created生命周期启动时首先运行里面的函数
    created()
    {
        randomnumber();
        this.getmusic();
    },
    //vue的方法
    methods: {
        async getmusic() {

            const {data}=  await  axios.get("https://autumnfish.cn/comment/hot?id=1860"+number+"&type=0")
            console.log(data)
            this.list = data.hotComments;
            if(vm.$data.list=="") {
                alert("获取失败，Reloading data！");
                window.location.reload();
            }
        },

    }
});
setInterval(function(){
    let LTime,NowTime,H,S,M,i,d,T,h,D,m,s;
    LTime=new Date("11/07/2020 0:0:00");//设定的时间点
    NowTime=new Date();//获取现在的时间
    T=(NowTime.getTime()-LTime.getTime());//现在的时间 - 过去的时间
    i=24*60*60*1000;//24小时*60分钟*60秒*1000毫秒
    d=T/i;
    D=Math.floor(d);
    h=(d-D)*24;
    H=Math.floor(h);
    m=(h-H)*60;
    M=Math.floor(m);
    s=(m-M)*60
    S=Math.floor(s);
    RunTime.innerHTML= "🧡我们在一起已经"+D + "天 " + H + " 时 " + M + " 分 " + S + " ″ "
},1000);;//一秒刷新一次
    //预先加载第一个人settimeout
    //设置倒计时执行
var backgroundimgcolor=document.getElementById("music");
    setTimeout(
        function (){
            vm.$data.content=vm.$data.list[0].content;
            vm.$data.likedCount=vm.$data.list[0].likedCount;
            vm.$data.avatarUrl=vm.$data.list[0].user.avatarUrl;
            vm.$data.nickname=vm.$data.list[0].user.nickname;
        },700
    );
    //循环轮播
   setInterval(
        function(){
            i+= 1;//当+1时切换到json获取到的array的数组next
            vm.$data.show=false;//先让网页文字隐藏起来
            //-----------------settimeout是为了防止两个 setInterval的毫秒差，导致显示效果不是理想效果，一个轮次就定时倒计时一次
            setTimeout(function (){
                vm.$data.show=true;//使文字显示出来
                vm.$data.content=vm.$data.list[i].content;
                vm.$data.likedCount=vm.$data.list[i].likedCount;
                vm.$data.avatarUrl=vm.$data.list[i].user.avatarUrl;
                vm.$data.nickname=vm.$data.list[i].user.nickname;
                },1700//当修改过度动画显示多少秒是才需要修改
            );
            if(i==vm.$data.list.length){
                i=0;
            }
        //-----------------------------------------------------------
        },10000//整体切换下一个的时间为15s即15000ms
    );

// getmusic() {
//     this.$http.get('http://39.106.32.91:3000/api/getlunbo').then(function (data) {
//         console.log(data.body)
//     })
// }
// async getmusic() {
//  const {result} =  await  this.$http.get('https://autumnfish.cn/comment/hot?type=0')
// console.log(result)
// }
//    axios的
// async getmusic() {
//      const {data}=  await  axios.get("https://autumnfish.cn/comment/hot?id=186016&type=0")
//     console.log(data)
// }
// const {data}=  await this.$http.get("https://autumnfish.cn/comment/hot?id=186016&type=0")
// if (data.status===0){//如果数据请求成功就把数据存放到list里面
// }
