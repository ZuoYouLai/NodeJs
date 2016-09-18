var util=require('util');
function Person(){
	this.name='Mr.lai';
	this.toString=function(){
		return this.name;
	}
}

var obj=new Person();
//util.inspect将对象转换为字符串
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));





