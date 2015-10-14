var express = require('express');
var app = express();
var appConfig = require('./AppConfig');
var bodyParser = require('body-parser');
var MongoClient = require('./DataStore/dbConnection/MongoClient.js')
var privateRoutes = require('./Routes/PrivateRoutes');
var publicRoutes = require('./Routes/PublicRoutes');
var testingRoutes = require('./Routes/TestRoutes')
MongoClient.connectToDb(callback)
app.set('superSecret', appConfig.secret);
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use('/private', privateRoutes.privateRouter);
app.use('/', publicRoutes.publicRouter);
app.use('/test',testingRoutes.testRouter)


function callback(){
	var server = app.listen(8085, function() {
	var host = server.address().address
	var port = server.address().port
	console.log("Server listening at http://%s:%s", host, port)
});
}