/**
 * Created by hj on 2017/5/30.
 */

//获取id节点的函数
    $(()=>{
var $id=$("#Product-box");
var imgs=$("ul.list-inline>li");
var $ul=$("ul.list-inline");
var LIWIDTH=parseFloat(imgs.css("width"));
$ul.css(
    "width",LIWIDTH*(imgs.length+2));



//console.log(LIWIDTH);
//var imgs=$("#Product-box>ul>li");
//console.log(imgs);


//自动轮播/
var speed=1000;
var wait=2000;
var timer=null;
var i=0;
//轮播一个周期
function move(){
    timer=setTimeout(()=>{
      i++;
    $ul.animate(
        {left:-i*LIWIDTH},speed,
        ()=>{
        //防止i越界
        if(i==imgs.length-2){
        i=0;
        $ul.css("left","0");
    }
    if(canMove)
    move();
    }
    );
    },wait);
}
move();
var canMove=true;
$id.hover(
    ()=>{clearTimeout(timer);
canMove=false;},
()=>{
    canMove=true;
    move();
}
);
})