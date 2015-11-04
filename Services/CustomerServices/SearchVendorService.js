var appConfig = require(process.cwd() + "\\AppConfig.js")
var MongoClient = require(process.cwd() + "\\DataStore\\dbConnection\\MongoClient")
var customerDbFunctions = require(process.cwd() + "\\Datastore\\DbFunctions\\CustomerDbFunctions")


exports.SearchVendorsHandler = function(request, response, eventType) {
	customerDbFunctions.searchVendorForEventQuery(MongoClient.dbCon, eventType, callback, response)
}

function callback(isSuccess, vendorList, response) {
	if (isSuccess) {
		response.json(vendorList)
		response.end()
	} else {
		response.write('Vendor Search Failed')
		response.end()
	}
}