exports.createNewEventQuery = function(db, eventObj, callback, response) {

	//var collection = db.collection('UserCollection')

db.collection('UserCollection').findAndModify({
		query:{"emailId": "Mudit"},
		update:{"events":eventObj}
})

	//db.collection('UserCollection').update({"emailId": "Mudit"},{"events":eventObj},callback);
	//}).toArray(function(err, result) {
	//	if (err) {
	//		db.close();
	//			console.log('nahi hua')
	//		return callback(false, response)
	//	} else {
	//			console.log('call hua')
	//		console.log(result)
	//		result[0].events.push(eventObj)
			//db.close();
			console.log("idhar code aaya")
			return callback(true, response)
	
}