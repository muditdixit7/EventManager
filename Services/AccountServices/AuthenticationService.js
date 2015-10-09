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
		console.log(token)
		response.json({
			success: true,
			message: 'User authencticate',
			token: token
		})
		response.write('success')
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		response.end();
	} else {
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		response.write('login Unsuccess');
	}
	response.end();
}