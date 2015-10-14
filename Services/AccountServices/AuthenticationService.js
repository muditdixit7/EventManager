var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var appConfig= require(process.cwd()+'\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd()+'\\DataStore\\dbConnection\\MongoClient.js')
var AccountDbFunctions = require(process.cwd()+'\\DataStore\\DbFunctions\\AccountDbFunctions.js');

exports.authenticationHandler = function(request, response) {

	var credentials = {
		username: request.body.email,
		password: request.body.password
	};
//	mongoClient.connect(dbUrl, function(err, db) {

		//if (err) {
		//	callback(false, response);
		//}
		AccountDbFunctions.loginQuery(MongoClient.dbCon, credentials, callback, response);
//	});
}

function callback(isSuccess, response) {
	if (isSuccess) {
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		response.write('login success');
	} else {
		response.writeHead(200, {
			'Content-Type': 'text/html'
		});
		response.write('login Unsuccess');
	}
	response.end();
}