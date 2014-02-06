'use strict';

if (process.cwd() != __dirname){
	process.chdir(__dirname);
}

var app = require('./core/app'),
	argv = require('optimist').argv,
	swig = require('swig');

if (app.settings.env == 'development'){
	swig.setDefaults({cache: false});
}

require('./core/modules').load(__dirname + '/modules');

var port = parseInt(argv.p, 10) || 4500;
app.listen(port, function(){
	console.log('Listening on port %d', port);
});
