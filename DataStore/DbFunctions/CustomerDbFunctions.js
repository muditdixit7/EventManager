exports.createNewEventQuery = function(db, eventObj, callback, request, response) {

  var collection = db.collection('UserCollection')
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

exports.searchVendorForEventQuery = function(db, eventType, callback, response) {
  var collection = db.collection('UserCollection')
  collection.find({
    "servicesProvided.eventCategory": eventType
  }).toArray(function(err, vendorList) {
    if (err) {
      callback(false)
    } else
      callback(true, vendorList, response)
  })
}