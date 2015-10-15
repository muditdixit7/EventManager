var jwt = require('jsonwebtoken')
var createEventService = require('../Services/CustomerServices/CreateEventService.js');
var addVendorService = require('../Services/VendorServices/AddVendorEventService.js');
var appConfig = require(process.cwd() + '\\AppConfig')
var Cookies = require('cookies')
var exports = module.exports = {}
exports.privateRouter = require('express').Router();


exports.privateRouter.use(function(req, res, next) {
	if (!req.decoded) {
		var cookies = new Cookies(req,res)
		var token = cookies.get('auth_token')
		console.log('token',token)//req.body.token || req.param('token') || req.headers['x-access-token']
		if (token) {
			jwt.verify(token,appConfig.secret,function(err, decoded) {
				if (err) {
					res.json({success: false, message: 'Authentication failed'})
					res.end()
				} else {
					req.decoded = decoded
					next()
				}
			})
		}
		else
		{
				res.json({success: false, message: 'Authentication failed'})
				res.end()	
		}
	}
})

exports.privateRouter.post('/createEvent', createEventService.createEventHandler)
exports.privateRouter.post('/addVendorService', addVendorService.addServiceHandler)