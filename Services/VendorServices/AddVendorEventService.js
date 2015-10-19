var appConfig = require(process.cwd() + '\\AppConfig');
var MongoClient = require(process.cwd() + '\\DataStore\\dbConnection\\MongoClient.js')
var VendorDbFunctions = require(process.cwd() + '\\DataStore\\DbFunctions\\VendorDbFunctions.js');
var exports = module.exports = {}

exports.addServiceHandler = function(request, response) {
	eventObj = {
		eventCategory: request.body.eventType,
		eventDescription: request.body.eventDescription
	};
	VendorDbFunctions.addNewServiceQuery(MongoClient.dbCon, eventObj, callback, request,response);
}



function callback(isSuccess, response) {
	if (isSuccess) {
		response.write('Vendor service added')
		response.end();

	} else {
		response.write('vendor service addition failed')
		response.end();
	}
}