
var registerUserPage = require('../Testing/RegisterUserPage.js')
var testRouter=require('express').Router();
var exports = module.exports = {}
exports.testRouter = require('express').Router();
exports.testRouter.get('/registerUserPage',registerUserPage.registerPageHandler)
