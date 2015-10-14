var mongo = require('mongodb').MongoClient;
var appConfig = require(process.cwd()+'\\AppConfig');
var dbUrl = appConfig.dbConnectionUrl;
var exports = module.exports = {}
exports.connectToDb = function(callback){
	mongo.connect(dbUrl, function(err, db) {
	if (err) {
		console.log('nahi hua')
			callback()
		return null	
		}
	else{
		console.log('yaha ka')
		exports.dbCon=db
		callback()
		}	
	});
}