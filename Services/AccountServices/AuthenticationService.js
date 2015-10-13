var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var appConfig = require(process.cwd() + '\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd() + '\\DataStore\\dbConnection\\MongoClient.js')
var AccountDbFunctions = require(process.cwd() + '\\DataStore\\DbFunctions\\AccountDbFunctions.js');
var jwt = require('jsonwebtoken');

exports.authenticationHandler = function(request, response) {

	var credentials = {
		username: request.body.email,
		password: request.body.password
	};
	AccountDbFunctions.loginQuery(MongoClient.dbCon, credentials, callback, response);

}

function callback(isSuccess, response,user) {
	if (isSuccess) {
		var token = jwt.sign(user, appConfig.secret, {
			expiresIn: 60 // expires in 24 hours
		});

		response.writeHead({
			success: true,
			message: 'User authencticate',
			token: token
		})
		console.log(response)
		//response.end();
	} else {

		//response.write('login Unsuccessful');
		response.end();
	}
}