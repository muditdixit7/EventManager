
var registerUserPage = require('../Testing/RegisterUserPage.js')
var createEventPage = require('../Testing/CreateEventPage.js')
var testRouter=require('express').Router();
var exports = module.exports = {}
exports.testRouter = require('express').Router();
exports.testRouter.get('/registerUserPage',registerUserPage.registerPageHandler)
exports.testRouter.get('/createEventPage',createEventPage.createEventPageHandler)
