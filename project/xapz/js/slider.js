/**
 * Created by hj on 2017/5/30.
 */

//��ȡid�ڵ�ĺ���
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


//�Զ��ֲ�/
var speed=1000;
var wait=2000;
var timer=null;
var i=0;
//�ֲ�һ������
function move(){
    timer=setTimeout(()=>{
      i++;
    $ul.animate(
        {left:-i*LIWIDTH},speed,
        ()=>{
        //��ֹiԽ��
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