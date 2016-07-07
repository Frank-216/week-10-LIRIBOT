// link to keys.js
var key = require('./keys.js');

console.log(process.argv);

var item = process.argv[2];

switch(item){
	case 'my-tweets':
		console.log('my-tweets');
		break;
	case 'spodify-this-song':
		console.log('alksdfas');
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

