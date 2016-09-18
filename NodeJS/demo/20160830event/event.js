var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('som_event',function(){
	console.log('som_event occurd.');
});
setTimeout(function(){
	event.emit('som_event');
},1000);

