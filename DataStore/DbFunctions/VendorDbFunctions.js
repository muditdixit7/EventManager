exports.searchVendorForEventQuery = function(db, eventType, callback) {
	var collection = db.collection('UserCollection')
	collection.find({"servicesProvided.eventCategory":eventType}).toArray(function(err,array){
		if(err){
			console.log(err)
		}
		else
		callback(array)
	})

}

exports.addNewServiceQuery = function(db, eventObj, callback, response) {
	var collection = db.collection('UserCollection')
	collection.updateOne({
		"emailId": "Arsalan"
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