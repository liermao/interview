/*
* 深度遍历跟广度遍历的区别
* 深度遍历DFS  自上而下的遍历搜索
* 广度遍历BFS  逐层遍历
*
* 区别
* 1.深度优先遍历不需要记住所有的节点，所以占用时间小，而广度优先需要记录所有的节点 占用空间大。
* 2.深度优先有回溯的操作，所以相对时间稍微长一些。
* 深度优先采用的是堆栈的形式，即先进后出。
* 广度优先采用的是队列的形式。即先进先出。
* */
// 具体事例

const data = [
    {
        name: 'a',
        children: [
            { name: 'b', children: [{ name: 'e' }] },
            { name: 'c', children: [{ name: 'f' }] },
            { name: 'd', children: [{ name: 'g' }] },
        ],
    },
    {
        name: 'a2',
        children: [
            { name: 'b2', children: [{ name: 'e2' }] },
            { name: 'c2', children: [{ name: 'f2' }] },
            { name: 'd2', children: [{ name: 'g2' }] },
        ],
    }
]

//深度遍历  使用递归
function  getName(data){
    const result=[];
     data.forEach((item)=>{
         const map=data=>{
             result.push(data.name);
             data.children&&data.children.forEach(child=>map(child))
         }
         map(item);
     })
    return result.join(',')
}

// 深度遍历
function  getName2(data){
    let result=[];
    let queue=data;
    while (queue.length>0){
        [...queue].forEach(child => {
            queue.shift();
            result.push(child.name)
            child.children && (queue.push(...child.children))
        })
    }
    return result.join(',')
}
