//创建多个对象，引用多个require
var one=require('./module');
one.setName('Lai');
var two=require('./module');
two.setName('HaoDa');
one.sayHello();

//都是指向同一个实例的，第一个被第二个对象进行覆盖，由后者来进决定


//包就是模块的集合