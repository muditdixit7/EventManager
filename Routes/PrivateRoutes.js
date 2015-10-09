var jwt = require('jsonwebtoken')
var createEventService = require('../Services/CustomerServices/CreateEventService.js');
var appConfig = require(process.cwd()+'\\AppConfig')

var exports = module.exports = {}
exports.privateRouter = require('express').Router();

/*
exports.privateRouter.use(function(req, res, next) {
	if (!req.decoded) {
		var token = req.body.token || req.param('token') || req.headers['x-access-token']
		if (token) {
			jwt.verify(token,appConfig.secret,function(err, decoded) {
				if (err) {
					res.json({success: false, message: 'Authentication failed'})
					res.end()
				} else {
					res.json({success:true, message: 'Authenticated','decode':decoded})
					req.decoded = decoded
					next()
				}
			})
		}
	}
})*/

exports.privateRouter.post('/createEvent', createEventService.createEventHandler)