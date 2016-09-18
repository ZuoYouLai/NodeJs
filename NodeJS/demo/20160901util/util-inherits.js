var util=require('util');
function Base(){
	this.name='base';
	this.base=1991;
	this.sayHello=function(){
		console.log('Hello '+this.name);
	}
}

Base.prototype.showName=function(){
	console.log(this.name);
}

function Sub(){
	this.name='sub';
}

//让sub继承base
util.inherits(Sub,Base);

var objBase=new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub=new Sub();
objSub.showName();
//虽然被继承了下来，但是对应的方法是无效的[函数未继承下来]
// objSub.sayHello();
console.log(objSub);