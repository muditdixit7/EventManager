exports.registerUserQuery = function(db, userObj, response, callback) {
	var collection = db.collection('UserCollection')
	collection.insert(userObj, function(err, docs) {
		if (err) {
			return callback(false, response)
		} else {
			return callback(true, response)
		}
	});
}

exports.loginQuery = function(db, credentials, callback, response) {
	console.log(credentials.username,credentials.password)
	var collection = db.collection('UserCollection')
	collection.findOne({"emailId": credentials.username,"password":credentials.password},{},function(err, result) {
		console.log(result)
		if (err) {
			callback(false, response);
			}
			callback(true, response,result);
    	db.close();
	});
}