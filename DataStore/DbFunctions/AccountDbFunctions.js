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
	var cursor = db.collection('UserCollection').find({
		"emailId": credentials.username,
		"password":credentials.password
	}).toArray(function(err, result) {
		if (err) {
			callback(false, response);
		} else if (result.length) {
			callback(true, response,result[0]);
		} else {
			callback(false, response);
		}
		db.close();
	});
}