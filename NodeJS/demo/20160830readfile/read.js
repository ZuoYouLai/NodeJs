var fs =require('fs');


//异步式读
fs.readFile('app.js','utf-8',function(err,data){
	if(err){
		console.error(err);
	}else{
		console.log(data);
	}
});
console.log('end.');