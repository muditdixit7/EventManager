var exports = module.exports = {}

exports.privateRouter = require('express').Router();
var createEventService = require('../Services/CustomerServices/CreateEventService.js');
exports.privateRouter.post('/createEvent', createEventService.createEventHandler)
 