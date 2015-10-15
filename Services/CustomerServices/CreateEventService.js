var appConfig = require(process.cwd() + '\\AppConfig');
var MongoClient = require(process.cwd() + '\\DataStore\\dbConnection\\MongoClient.js')
var CustomerDbFunctions = require(process.cwd() + '\\DataStore\\DbFunctions\\CustomerDbFunctions.js');
require(process.cwd() + '\\Services\\VendorServices\\NotifyVendors.js')
var exports = module.exports = {}



exports.createEventHandler = function(request, response) {
	eventObj = {
		eventCategory: request.body.eventType,
		eventDescription: request.body.eventDescription
	};

	CustomerDbFunctions.createNewEventQuery(MongoClient.dbCon, eventObj, callback,request, response);
}



function callback(isSuccess, response, eventType) {
	if (isSuccess) {
		appConfig.eventEmitter.emit('eventCreated', eventType)
		response.write('Event created successfully')
		response.end();

	} else {
		response.write('Event creation failed')
		response.end();
	}
}