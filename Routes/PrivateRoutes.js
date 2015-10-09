var jwt = require('jsonwebtoken')
var createEventService = require('../Services/CustomerServices/CreateEventService.js');

var exports = module.exports = {}
exports.privateRouter = require('express').Router();


exports.privateRouter.use(function(req, res, next) {
	if (!req.decoded) {
		var token = req.body.token || req.param('token') || req.headers['x-access-token']
		if (token) {
			jwt.verify(token, function(err, decoded) {
				if (err) {
					console.log('Failed')
					res.json({success: false, message: 'Authentication failed'})
					res.end()
				} else {
					req.decoded = decoded
					next()
				}
			})
		}
	}
})

exports.privateRouter.post('/createEvent', createEventService.createEventHandler)