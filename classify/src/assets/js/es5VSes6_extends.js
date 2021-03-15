/*
* ES5的继承和ES6的继承有什么区别？
* */

/*
* ES5的继承时通过prototype或构造函数机制来实现。
* ES5的继承实质上是先创建子类的实例对象，
* 然后再将父类的方法添加到this上（Parent.apply(this)）。
*/

// 原型链继承
// 定义父类
function Parent(name){
     this.name=name;
 }
Parent.prototype.getName=function (){
     return this.name;
}
// 定义子类
function  Children(){
    this.age=24;
}
// 通过Children的prototype属性和Parent进行关联继承
Children.prototype=new Parent("老李");
let test=new Children();
test.age;
test.getName();
// 构造函数继承
//定义父类
function patent1(val){
    this.language=['javascript','react','node'];
    this.value=val;
}
//定义子类
function Children1(){
    patent1.call(this,arguments);
}
let test1=new Children1(666);
test1.language;
test1.value;
/*构造继承关键在于，通过在子类的内部调用父类，即通过使用apply()或call()方法可以在将来新创建的对象上获取父类的成员和方法*/

/*es6继承*/
class Father {
    constructor(name,age) {
        this.name=name;
        this.age=age;
    }
    show() {
        console.log(`我叫:${this.name}， 今年${this.age}岁`);
    }

}

class Son extends  Father {}
let son=new Son("李先生","25");
son.show()

/*ES6中新增了class关键字来定义类，
通过保留的关键字extends实现了继承。
实际上这些关键字只是一些语法糖，
底层实现还是通过原型链之间的委托关联关系实现继承。
区别于ES5的继承，ES6的继承实现在于使用super关键字调用父类，
反观ES5是通过call或者apply回调方法调用父类。*/
