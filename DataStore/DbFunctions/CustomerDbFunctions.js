exports.createNewEventQuery = function(db, eventObj, callback, request,response) {

  var collection = db.collection('UserCollection')
    console.log("emailId",request.decoded.emailId)
  collection.updateOne({
    "emailId": request.decoded.emailId
  }, {
    $push: {
      "events": eventObj
    }
  }, function(err, results) {
    if (results.result.nModified) {
      callback(true, response, eventObj.eventCategory)
    } else
      callback(false, response)
  });
}