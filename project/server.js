var express = require('express');
var application = express();

application.use(express.static('./client'));

require('./api/routes')(application)

application.get('*', function (req, res) {
	res.sendFile('/client/views/index.html', { root: __dirname });
})
application.listen(8080, function () {
	console.log('Server is running...')
});