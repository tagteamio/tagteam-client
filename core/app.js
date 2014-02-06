'use strict';

var express = require('express'),
	cons = require('consolidate');

var app = express()
	.engine('html', cons.swig)
	.set('view engine', 'html')
	.set('views', __dirname + '/../views')
	.use(express.static(__dirname + '/../public'))
	.use(express.bodyParser())
	.use(express.cookieParser())
	.use(express.session({
		secret: 'my_secret_string',
		key: 'tagteam'
	}));

module.exports = app;
