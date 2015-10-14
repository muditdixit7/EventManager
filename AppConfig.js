var appConfig={};
var events = require('events')
appConfig.eventEmitter = new events.EventEmitter();
appConfig.loginPage='D:/EventManager/View/index.html';
appConfig.dbConnectionUrl='mongodb://localhost:27017/User';
appConfig.secret='EventManagerApp';
module.exports=appConfig;