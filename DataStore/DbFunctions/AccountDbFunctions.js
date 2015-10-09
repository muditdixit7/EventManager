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
	var cursor = db.collection('UserCollect').find({
		"emailId": credentials.username,
		"password":credentials.password
	}).toArray(function(err, result) {
		if (err) {
			console.log(result)
			callback(false, response);
		} else if (result.length) {
			console.log(result)
			callback(true, response);
		} else {
			console.log(result)
			callback(false, response);
		}
		db.close();
	});
}