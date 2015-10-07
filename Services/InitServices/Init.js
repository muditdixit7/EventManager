var fs=require('fs');
var appConfig=require(process.cwd()+'\\AppConfig');
exports.initHandler=function(request,response){

	fs.readFile(appConfig.loginPage,function(err,data){

		if(err)
		{
			console.log(err);
			response.writeHead(404,{'Content-Type': 'text/html'});
		}
		else
		{
			response.writeHead(200,{'Content-Type': 'text/html'});
			response.write(data.toString());
		}
		response.end();
	});

}