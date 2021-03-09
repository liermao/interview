<template>
  <div>
    <h2>面试题合集</h2>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index">
        <span class="number">{{ index + 1 }}.</span>
        <span class="class">[{{ item.class }}]</span>
        <span class="title">{{ item.title }}</span>
        <p>{{ item.answer }}<a v-if="item.link" :href=item.link>链接说明</a></p>
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
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  list-style: none;
  max-width: 600px;
  .number, .class {
    font-weight: bolder;
  }
  .title{
    margin-left: 10px;
    font-weight: bolder;
  }
  .analysis{
    border: 1px solid #eeecec;
    padding: 10px;
    background: #f5f5f5;
  }
}
</style>
