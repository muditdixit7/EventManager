var mongo = require('mongodb').MongoClient;
var appConfig = require(process.cwd() + '\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd() + '\\DataStore\\dbConnection\\MongoClient.js')
var AccountDbFunctions = require(process.cwd() + '\\DataStore\\DbFunctions\\AccountDbFunctions.js');

exports.registerUserHandler = function(request, response) {

	if (request.body.category.valueOf() === 'Customer') {
		userObj = {
			emailId: request.body.emailId,
			password: request.body.password,
			phoneNumber: request.body.phoneNumber,
			category: request.body.category,
			events: []
		}
		AccountDbFunctions.registerUserQuery(MongoClient.dbCon, userObj, response, callback)
	} else {
		userObj = {
			emailId: request.body.emailId,
			password: request.body.password,
			phoneNumber: request.body.phoneNumber,
			category: request.body.category,
			serviceProvided: []
		}

		AccountDbFunctions.registerUserQuery(MongoClient.dbCon, userObj, response, callback)
	}
}

function callback(isSuccess, response) {
	if (isSuccess) {
		response.write('User registration successfully')
		response.end();
	} else {
		response.write('User registration failed')
		response.end();
	}
}