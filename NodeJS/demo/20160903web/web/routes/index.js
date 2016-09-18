var express = require('express');
var util=require('util');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/hello',function(req,res,next){
	res.render('index', {title:'Time is'+new Date().toString()})
});


//localhost:3000/list
router.get('/list',function(req,res,next){
	res.render('me/list',{
		'title':'list',
		'items':[1991,'byvoid','express','Node.js']
	});
});



// 注意：下面是无效的定义的内容
// //静态视图助手app.helpers()
// router.helpers({
// 	inspect:function(obj){
// 		return util.inspect(obj,true);
// 	}
// });
// router.dynamicHelpers({
// 	headers:function(req,res){
// 		return req.headers;
// 	}
// });
//localhost:3000/helper
router.get('/helper',function(req,res){
	res.render('helper',{
		title:'Helpers'
	});
});





// 进行对个人网站的建立
//localhost:3000/web/index[登录使用要的]
router.get('/web/index',function(req,res){
	res.render('web/index',{
		title:'登录界面'
	});
});
//localhost:3000/web/login
//获取对应的参数
router.post('/web/login',function(req,res){
	//空的内容
	// console.log(req.params);
	//post
	// console.log('post');
	//undefined
	// console.log( req.query['userName'] );
	// console.log( req.query['userPassword'] );
	//正确的内容
	console.log( req.body.userName );
	console.log( req.body.userPassword );
	res.render('web/content',{
		title:'主页面',
		userName:req.body.userName
	});
});







































module.exports = router;
