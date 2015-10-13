console.log('Oauth hua 2')

var appConfig = require(process.cwd()+'\\AppConfig');
var appConfig='';
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd()+'\\DataStore\\dbConnection\\MongoClient.js')
var CustomerDbFunctions =require(process.cwd()+'\\DataStore\\DbFunctions\\CustomerDbFunctions.js');
var exports = module.exports = {}
var events = require('events')
var eventEmitter = new events.EventEmitter();



exports.createEventHandler = function(request, response) {
eventObj = {
	eventCategory: request.body.eventType,
	eventDescription: request.body.eventDescription
};

	CustomerDbFunctions.createNewEventQuery(MongoClient.dbCon, eventObj, callback, response);
}



function callback(isSuccess, response) {
	if (isSuccess) {
		eventEmitter.emit('eventCreated')
		console.log('Event created successfully')
		response.write('Event created successfully')
		response.end();

	} else {
		response.write('Event creation failed')
		response.end();
	}
}