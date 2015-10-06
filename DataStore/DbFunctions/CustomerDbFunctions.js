exports.createNewEventQuery = function(db, eventObj, callback, response) {

	var collection = db.collection('UserCollection')
	var result = collection.find({
		"emailId": "Dhruva"
	}).toArray(function(err, result) {
		if (err) {
			db.close();
			return callback(false, response)
		} else {
			console.log(result[0].events)
			result[0].events.push(eventObj)
			db.close();
			return callback(true, response)
		}

	})
}