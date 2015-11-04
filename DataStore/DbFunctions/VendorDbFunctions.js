exports.searchVendorForEventQuery = function(db, response, eventType, callback) {
	var collection = db.collection('UserCollection')
	collection.find({
		"servicesProvided.eventCategory": eventType
	}).toArray(function(err, array) {
		if (err) {
			callback(false)
		} else
			callback(true, response, array)
	})
}

exports.addNewServiceQuery = function(db, eventObj, callback, request, response) {
	var collection = db.collection('UserCollection')
	collection.updateOne({
		"emailId": request.decoded.emailId
	}, {
		$push: {
			"servicesProvided": eventObj
		}
	}, function(err, results) {
		if (results.result.nModified) {
			callback(true, response, eventObj.eventCategory)
		} else
			callback(false, response)
	});
}