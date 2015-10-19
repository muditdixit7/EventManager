var appConfig = require(process.cwd() + "\\AppConfig.js")
var MongoClient = require(process.cwd() + "\\DataStore\\dbConnection\\MongoClient")
var vendorDbFunctions = require(process.cwd() + "\\Datastore\\DbFunctions\\VendorDbFunctions")


appConfig.eventEmitter.on('eventCreated', function(evenType,response) {
	//console.log(evenType)
	searchVendors(evenType,response)
})

var searchVendors = function(evenType) {
	vendorDbFunctions.searchVendorForEventQuery(MongoClient.dbCon, evenType, messageVendors)
	k
}

var messageVendors = function(listOfVendors) {
	console.log(listOfVendors)
// use some service to generate some messages

}