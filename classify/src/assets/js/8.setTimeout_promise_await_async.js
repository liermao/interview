/*
* 1.setTimeout
*注意setTimeout是异步执行函数 ,
*当js主线程运行到此函数时,setTimeout ,
* setTimeout(尽管setTimeout的延迟时间为0时)
* 当执行完当前事件循环的时候,setTimeout(或者某一个)事件循环中被执行
* */
console.log('script start')
setTimeout(function () {
    console.log('setTimeout')
})
console.log('script end')
//输出结果：script start >script end>setTimeout


/*
* 2.promise
* Promise 本身是同步的立即执行函数,当在执行体中执行resolve()或者reject的时候,此时是异步操作
* 会先执行then/catch(异步执行)等,等主栈完成后,才会去执行resolve()/reject中的方法,
* promise.then里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行
* */
console.log('script start')//1 住栈先执行
let promise1 = new Promise(function (resolve) {
    console.log('promise1')//2 继续执行
    resolve()  // 变成异步操作，.then放到微任务队列。主栈继续执行，输出3,4
    console.log('promise1 end')//3
}).then(function () {
    console.log('promise2')//5 执行微任务队列。
})
setTimeout(function () {
    console.log('setTimeout')//6主栈执行完 最后执行宏任务队列
})
console.log('script end')//4
// 输出结果  script start> promise1 >promise start1>promise1 end>script end>promise2>setTimeout


/*
3.async/await
async函数返回一个promise对象,
当函数执行的时候,一旦遇到await就会先返回,
等到触发的异步操作完成(await的函数),
在执行函数体后面的语句,可以理解为,async让出了线程,
跳出了async函数体,因此await函数后的语句相当于在then回调中执行.
 await的含义为等待，
 也就是 async 函数需要等待await后的函数执行完成并且有了返回结果（Promise对象）之后，
 才能继续执行下面的代码。
 await通过返回一个Promise对象来实现同步的效果。

 async函数表示函数里面可能会有异步方法，
 await后面跟一个表达式，async方法执行时，
 遇到await会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。
 */

async function async1() {
    console.log('async1 start');//2 进入微异步队列 输出
    await async2();            //3遇到await  先返回4 让出队列。
    console.log('async1 end')   // 最后输出
}

async function async2() {
    console.log('async2')//4 输出
}

console.log('script start');//1 主栈先执行
async1();
console.log('script end')//5 主队列继续执行

//输出结果
//script start > async1 start > async2 >script end>async1 end
