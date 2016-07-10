// link to keys.js
var key = require('./keys.js');
// spodify node 
var spotify = require('spotify-web-api-node');

var spotifyAPI = new spotify({
	clientID:"551fea5144ff44ada1c5ba472a9ea0da",
	clientSecret:"db4affe0ddbc4270809e25ac5d74c38a",
	redirectURi:"http://mysite.com/callback/",

})
//twitter
var twitter = require('twitter');

console.log(process.argv);

var item = process.argv[2];

switch(item){
	case 'my-tweets':
		client.get('favorites/list',function(error, tweets,response){
			// if(error) throw error;
			console.log(tweets);
			console.log(response);
		});
		break;
	case 'spotify-this-song':
		spotifyAPI.searchTracks('Love').then(function(data) {

	    console.log('Search by "Love"', data.body.tracks.items[0].album);

	    // var name = data.body.tracks.items[0].album;

	  }, function(err) {
	    console.error(err);
	  });
		break;
	case 'movie-this':
		console.log('movie-this');
		break;
	default:
		console.log('do-what-it-says');
		break;
};
//my-tweets
//spodify-this-song
//movie-this
//do-what-it-says

// get working on this today


