

//异步式请求
function readFileCallBack(err,data){
	if (err) {
		console.log(err);
	}else{
		console.log(data);
	}
}

var fs=require('fs');

fs.readFile('app.js','utf-8',readFileCallBack);


console.log('end.');