var mongoClient = require('mongodb').MongoClient;
var Cookies = require('cookies')
var appConfig = require(process.cwd() + '\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;
var MongoClient = require(process.cwd() + '\\DataStore\\dbConnection\\MongoClient.js')
var AccountDbFunctions = require(process.cwd() + '\\DataStore\\DbFunctions\\AccountDbFunctions.js');
var jwt = require('jsonwebtoken');
var cookies = null
exports.authenticationHandler = function(request, response) {
	cookies = new Cookies(request, response)
	var credentials = {
		username: request.body.email,
		password: request.body.password
	};
	AccountDbFunctions.loginQuery(MongoClient.dbCon, credentials, callback, response);

}

function callback(isSuccess, response, user) {
	if (isSuccess) {
		user.password = null
		var token = jwt.sign(user, appConfig.secret, {
			expiresIn: 3660 // expires in 24 hours
		});

		cookies.set('auth_token', token)
		response.write(new Buffer(JSON.stringify(user)))
		response.end()


	} else {
		response.end();
	}
}