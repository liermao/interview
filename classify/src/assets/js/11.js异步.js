/*
*
* 11.JS 异步解决方案的发展历程以及优缺点。
*
* */

/*
*
*
* 1.回调函数 callback
* 缺点:回调地狱。错误不好捕获。不能用try catch。不能return。处理事件只能只能在函数里面写。耦合性强。不容易修改。
* 优点：解决了同步的问题。
* */

/*
*
* 2.promise
* 缺点：无法取消promise。错误需要通过回调函数来捕获。
* 优点：实现了链式调用。每次.then返回一个全新的promise。如果我们在.then中return。return的结果会被promise resolve包装。
*
*
* */

/*
*
* 3.Generator
* 优点：可以控制函数的执行。借鉴python的语法。 写法 funtion*  something(){}; 两个方法next(), for ... of循环。
*缺点：用的少。
*
* */

/*
*
*
* 4. Async/await
* 优点是：代码清晰，不用像 Promise 写一大堆 then 链，处理了回调地狱的问题
* 缺点：await 将异步代码改造成同步代码，如果多个异步操作没有依赖性而使用 await 会导致性能上的降低。
*
*
*
*
*
*
*
*
* */
