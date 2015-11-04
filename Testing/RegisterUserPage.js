var fs = require('fs');
var appConfig = require(process.cwd() + '\\AppConfig');
exports.registerPageHandler = function(request, response) {
	console.log(process.cwd() + '\\View\\Register.html')
	fs.readFile(process.cwd() + '\\View\\Register.html', function(err, data) {

		if (err) {
			console.log(err);
			response.writeHead(404, {
				'Content-Type': 'text/html'
			});
		} else {
			response.writeHead(200, {
				'Content-Type': 'text/html'
			});
			response.write(data.toString());
		}
		response.end();
	});

}