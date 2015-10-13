exports.createNewEventQuery = function(db, eventObj, callback, response) {

	var collection = db.collection('UserCollection')

   collection.updateOne(
   	{ "emailId": "Mudit" },
   	{$push: { "events":eventObj}},
   	function(err, results) {
    	if(err){
    		 callback(false, response)
    	}
    	 callback(true, response)
   });
}