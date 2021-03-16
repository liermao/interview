
/*防抖函数
* 思路
* 每次触发时间都取消之前延时调用方法*/
function  debounce(fn){
    let timeout=null;
    return function (){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            fn.apply(this,arguments)
        },500)
    }
}
function  sayHi(){
    console.log("防抖成功")
}
 let inp=document.getElementById("inp");
 inp.addEventListener('input',debounce(sayHi()));

 /*节流函数
 * 思路
 * 每次触发事件都会判断当前是否有等待执行的延迟函数*/

function throttle(fn){
    let canRun=true;
     return function (){
         if(!canRun) return;
         canRun=false;
         setTimeout(()=>{
             fn.apply(this,arguments);
             canRun=true;
         },500)
     }
}
function sayHi1() {
    console.log("节流成功")
}
window.addEventListener('resize', throttle(sayHi1));
