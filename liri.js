// link to keys.js
var key = require('./keys.js');
// spodify node 
var Spotify = require('spotify-web-api-node');

// spotify api adding keys.  Im using spotifyAPI instead of spotify because it has a greater library on npm
var spotifyAPI = new Spotify({
	clientID:"551fea5144ff44ada1c5ba472a9ea0da",
	clientSecret:"db4affe0ddbc4270809e25ac5d74c38a",
	redirectURi:"http://mysite.com/callback/",

})
//twitter
var Twitter = require('twitter');
// could not get twitter keys js to work.  Will ask about it in class 
var client = new Twitter({
	consumer_key:"rzZyZVo4r1LSedpvYDuZ7awaY",
  consumer_secret: "rzrDFMj9v1VWDo884d1V36k1jmnU3oTg3yC0XaYn3lmqgsehF1",
  access_token_key: "474460637-PZsfEGPgAygzakCrAipcZpRRjez4pAFdSWwqBAoI",
  access_token_secret: "grFGjaO1WGwdVCfDyMYwGf1TcUEe7RhZMqo04Lz6eqTcS",
});

// item to hold data information
var item = process.argv[2];

// function to pring spodify data
function spodifyPrint(data){
	var artist = data.body.tracks.items[0].artists[0].name;
	// album name
	var album = data.body.tracks.items[0].album.name;
	//preview url
	var preview = data.body.tracks.items[0].preview_url;
	//song name
	var songName = data.body.tracks.items[0].name;
	//Album Type
	var albumType = data.body.tracks.items[0].album.album_type;

	// print out results from search
	console.log("Spodifyt Search Results");
  console.log("--------------------");
  console.log('Artist: ' + artist);
  console.log("Album: " + album);
  console.log("Album Type: " + albumType);
  console.log("Song Name: "+ songName);
  console.log('URL: ' + preview);
  console.log("\n");
}

// use a switch depending on what the user inputs 
switch(item){
	case 'my-tweets':
		client.get('favorites/list',function(error, tweets,response){
			// if(error) throw error;
			console.log('\n');
			//create a for loop 
			for (var i = 0; i < tweets.length; i++){
				console.log("Item #" + i);
				//Date tweet was created 
				console.log("Date: "+tweets[i].created_at);
				// Tweet text
				console.log("Tweet: "+ tweets[i].text)
				// print line break
				console.log("-----------------------------")
				// console.log(tweets[i].text);

			}
			console.log('\n');
			
		});
		break;
	case 'spotify-this-song':
		if(process.argv[3] !== undefined){
			spotifyAPI.searchTracks(process.argv[3]).then(function(data) {
				spodifyPrint(data);
	  }, function(err) {
	    console.error(err);
	  });
		}else{
			var song = "Whats my age again?";
			spotifyAPI.searchTracks(song).then(function(data) {
				spodifyPrint(data);
	 			var song = "Whats my Name Again?";
	  }, function(err) {
	    console.error(err);
	  });
		}
		break;
	case 'movie-this':
		console.log('movie-this');s
		break;
	default:
		console.log(process.argv[3]);
		break;
};



