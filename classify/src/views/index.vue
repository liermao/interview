<template>
  <div>
    <!--    <h2>面试题合集</h2>-->
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <span class="number">{{ index + 1 }}.</span>
        <span class="class">[{{ item.class }}]</span>
        <span class="title">{{ item.title }}</span>
        <p>{{ item.answer }}<a v-if="item.link" :href=item.link>(链接说明)</a></p>
        <div class="analysis" v-if="item.analysis" v-html="item.analysis"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          class: "vue",
          title: "写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？",
          answer: "key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度。",
          link: "https://segmentfault.com/a/1190000008782928"
        },
        {
          class: "js",
          title: "['1', '2', '3'].map(parseInt) what & why ?",
          answer: "[1,NaN,NaN],parseInt('1', 0)",
          analysis: "parseInt('1', 0) radix为0时，且string参数不以“0x”和“0”开头时，按照10为基数处理。这个时候返回1。" +
              "parseInt('2', 1) 基数为1（1进制）表示的数中，最大值小于2，所以无法解析，返回NaN。" +
              "parseInt('3', 2) 基数为2（2进制）表示的数中，最大值小于3，所以无法解析，返回NaN。",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/4"
        },
        {
          class: "js",
          title: "什么是防抖和节流？有什么区别？如何实现",
          answer: "防抖：动作绑定事件，动作发生后一定时间后触发事件，在这段时间内，如果该动作又发生，则重新等待一定时间再触发事件。" +
              "节流：动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5"
        },

        {
          class: "js",
          title: "介绍下 Set、Map、WeakSet 和 WeakMap 的区别",
          answer:"",
          analysis: "Set</br>" +
              "1.成员不能重复</br>" +
              "2.健值相同，有点类似数组。</br>" +
              "3. 可以遍历，方法有add, delete,has</br>" +
              "weakSet</br>" +
              "成员都是对象</br>" +
              "成员都是弱引用，随时可以消失。 可以用来保存DOM节点，不容易造成内存泄漏</br>" +
              "不能遍历，方法有add, delete,has</br>" +
              "Map</br>" +
              "本质上是健值对的集合，类似集合</br>" +
              "可以遍历，方法很多，可以干跟各种数据格式转换</br>" +
              "weakMap</br>" +
              "1.直接受对象作为健名（null除外），不接受其他类型的值作为健名</br>" +
              "健名所指向的对象，不计入垃圾回收机制</br>" +
              "不能遍历，方法同get,set,has,delete</br>",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5"
        },
        {
          class: "js",
          title: "介绍下深度优先遍历和广度优先遍历，如何实现？",
          answer: "对于算法来说 无非就是时间换空间 空间换时间" +
              "深度优先(DFS)不需要记住所有的节点, 所以占用空间小, 而广度优先需要先记录所有的节点占用空间大" +
              "深度优先有回溯的操作(没有路走了需要回头)所以相对而言时间会长一点" +
              "深度优先采用的是堆栈的形式, 即先进后出" +
              "广度优先(BFC)则采用的是队列的形式, 即先进先出",
          link: "https://www.cnblogs.com/zzsdream/p/11322060.html"
        },
        {
          class: "js",
          title: "请分别用深度优先思想和广度优先思想实现一个拷贝函数？",
          answer: "答案见链接",
          link: "https://blog.csdn.net/qq_46299172/article/details/108545861"
        },
        {
          class: "js",
          title: "ES5/ES6 的继承除了写法以外还有什么区别？",
          answer: "区别于ES5的继承，ES6的继承实现在于使用super关键字调用父类，反观ES5是通过call或者apply回调方法调用父类。",
          link: "https://blog.csdn.net/weixin_44195250/article/details/102809672?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control&dist_request_id=1328642.52040.16157881689617531&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-1.control"
        },
        {
          class: "js",
          title: "setTimeout、Promise、Async/Await 的区别",
          answer: "setTimeout是宏时间队列。在主执行栈执行完之后才执行。" +
              "promise本身是同步的立即执行函数" +
              "在执行resolve()或者reject的时候，此时是异步操作，会先执行then/catch等，等主栈完成后，才会去执行resolve()/reject中的方法" +
              "async函数返回一个promise对象，当函数执行的时候，一旦遇到await就会先返回，等到触发的异步操作完成(await的函数)，" +
              "在执行函数体后面的语句，可以理解为，async让除了线程，跳出了async函数体，因此await函数的后的语句相当于在then的回调中执行。" +
              "await的含义为等待，也就是async函数需要等到await后的函数执行完成并且有了返回结果（promise对象之后），才能继续执行下面的代码。" +
              "await通过返回一个promise来实现同步效果。",
          link: "https://blog.csdn.net/qq_46299172/article/details/108545861"
        },
        {
          class: "js",
          title: "异步笔试题",
          answer: "请写出下面代码的结果（答案详情看js）",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7"
        },
        {
          class: "js",
          title: "var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组",
          answer: "Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7"
        },
        {
          class: "js",
          title: "js异步解决方案的发展历程以及优缺点。",
          answer: "答案见链接",
          link: "https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/11"
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  max-width: 600px;

  li {
    margin-bottom: 20px;

    .number, .class {
      font-weight: bolder;
    }
    a{
      text-decoration: none;
      color: #a16a6a;
      margin-left: 10px;
      font-size: 12px;
    }
    .title {
      margin-left: 10px;
      font-weight: bolder;
    }

    .analysis {
      border: 1px solid #eeecec;
      padding: 10px;
      background: #f5f5f5;
    }
  }
}
</style>
