var events = require('events')
var eventEmitter = new events.EventEmitter();

eventEmitter.on('eventCreated',function(){
	console.log('Trial')
})