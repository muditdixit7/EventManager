var MongoClient = require('mongodb').MongoClient;
var appConfig = require(process.cwd()+'\\AppConfig');
var appConfig='';
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd()+'\\DataStore\\dbConnection\\MongoClient.js')
var CustomerDbFunctions =require(process.cwd()+'\\DataStore\\DbFunctions\\CustomerDbFunctions.js');

exports.createEventHandler = function(request, response) {
eventObj = {
	eventCategory: request.body.eventType,
	eventDescription: request.body.eventDescription
};
//MongoClient.connect(url, function(err, db) {
//	if (err) {
//		callback(false, response)
//	}
	CustomerDbFunctions.createNewEventQuery(MongoClient.dbCon, eventObj, callback, response);
		//Emitt notification evemt from
//});
}

function callback(isSuccess, response) {
	if (isSuccess) {
		response.write('Event create successfully')
		response.end();
	} else {
		response.write('Event creation failed')
		response.end();
	}
}