exports.createNewEventQuery = function(db, eventObj, callback, response) {

	var collection = db.collection('UserCollection')

	var result = collection.findAndModify({
		query:{"emailId": "Mudit"},
		update:{"events":eventObj}})
	//}).toArray(function(err, result) {
	//	if (err) {
	//		db.close();
	//			console.log('nahi hua')
	//		return callback(false, response)
	//	} else {
	//			console.log('call hua')
	//		console.log(result)
	//		result[0].events.push(eventObj)
			db.close();
			return callback(true, response)
	
}