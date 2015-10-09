var appConfig = require(process.cwd()+'\\AppConfig');
var appConfig='';
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd()+'\\DataStore\\dbConnection\\MongoClient.js')
var CustomerDbFunctions =require(process.cwd()+'\\DataStore\\DbFunctions\\CustomerDbFunctions.js');
var exports = module.exports = {}
var events = require('events')
var eventEmitter = new events.EventEmitter();


var Db = require('mongodb').Db;
var Server = require('mongodb').Server;
var appConfig = require(process.cwd()+'\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;


var dbCon = new Db('User', new Server('localhost', 27017))

exports.createEventHandler = function(request, response) {
eventObj = {
	eventCategory: request.body.eventType,
	eventDescription: request.body.eventDescription
};
//MongoClient.connect(url, function(err, db) {
//	if (err) {
//		callback(false, response)
//	}
	
	CustomerDbFunctions.createNewEventQuery(dbCon, eventObj, callback, response);
		//Emitt notification evemt from
//});
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