var appConfig = require(process.cwd() + "\\AppConfig.js")
var MongoClient = require(process.cwd() + "\\DataStore\\dbConnection\\MongoClient")
var vendorDbFunctions = require(process.cwd() + "\\Datastore\\DbFunctions\\VendorDbFunctions")


appConfig.eventEmitter.on('eventCreated', function(evenType, response) {
	searchVendors(evenType, response)
})

var searchVendors = function(evenType, response) {
	vendorDbFunctions.searchVendorForEventQuery(MongoClient.dbCon, response, evenType, messageVendors)
}

var messageVendors = function(isSuccess, response, listOfVendors) {
	if (isSuccess) {
		response.json(listOfVendors)
			// use some service to generate messages fro notification
	} else {
		//send null in response
	}
}