                                                                                                                                                                                                                                                                                                                                                                                                                            var superagent = require('superagent');
/*var data = require('./data');*/

module.exports = function (app) {

	app.get('/api/:searchtext', function (req, res) {
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.params.searchtext )
			.query({ json: true })
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}
				res.json(response);
				
				  // console.log(response.body);
				
			});
				
	});


		app.get('/api/show/:id',function (req,res) {
			console.log('Routes id -->'+req.params.id);
			superagent.get('http://api.tvmaze.com/shows/' + req.params.id+'?embed[]=cast')
				.query({format: 'json'})
				// .query({api_key: config.comicvine.key})
				// .query({field_list: 'id,name,image,description'})
				.end(function (err,result) {
					if (err) {
						console.log('error : '+err);
					return res.send(err);
				}

					console.log(result.body);
					res.json(result.body);
				})
	})

}