//创建一个模块
//require是从外部获取一个模块，即是获取模块的exports对象
var name;
exports.setName=function(pname){
	name=pname;
}
exports.sayHello=function(){
	console.log('Hello'+name);
}