/*
*
*
*将数组扁平化并去除其中重复数据，最终得到一个升序且不重复的数组
*
*[ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
*
*
*
*
*
*
* */

let arr=[ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 方法1
    Array.from(new Set(arr.flat(Infinity))).sort(((a, b) => {return a-b}))

/*
* arr.flat(Infinity) 多维数组转为一维数组Infinity是 遍历深度。infinity是展开任意深度的嵌套数组的意思。
* new Set 返回类数组 Array。form 把类数组转换为数组。
* sort排序
* */

Array.prototype.flat= function() {
    return [].concat(...this.map(item => (Array.isArray(item) ? item.flat() : [item])));
}

Array.prototype.unique = function() {
    return [...new Set(this)]
}

const sort = (a, b) => a - b;
arr.flat().unique().sort(sort);
