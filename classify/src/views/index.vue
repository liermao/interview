<template>
    <div>
      <h2>面试题合集</h2>
      <ul class="list">
        <li v-for="(item,index) in list" :key="index">
           <span class="number">{{index+1}}.</span>
           <span class="class">[{{item.class}}]</span>
           <span class="title">{{item.title}}</span>
           <p>{{item.answer}}<a :href=item.link>链接说明</a></p>

        </li>
      </ul>
    </div>
</template>

<script>
export default {
name: "index",
  data(){
  return{
    list:[
      {
        class:"vue",
        title:"写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？",
        answer:"key的作用是为了在diff算法执行时更快的找到对应的节点，提高diff速度。",
        link:"https://segmentfault.com/a/1190000008782928"
      }
    ]


  }
  }
}
</script>

<style scoped lang="scss">
    .list{
      list-style: none;
      .number,.class{
        font-weight: bolder;
      }
    }
</style>
