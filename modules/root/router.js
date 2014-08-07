'use strict';

var router = require('express').Router();

router.get('/', function(req, res){
	var locals = {},
		view = 'index';

	if (!req.session.user){
		locals = {action: '/login/'};
		view = 'login';
	}

	res.render(view, locals);
});

router.route('/signup/')
	.get(function(req, res){
		if (req.session.user){
			res.redirect('/');
			return;
		}

		var locals = {action: '/signup/'},
			view = 'signup';
		res.render(view, locals);
	})
	.post(function(req, res){
		if (!req.body.email || !req.body.password){
			return res.render('signup', {
				action: '/signup/',
				error: 'Email or password missing'
			});
		}

		res.status(501).json({
			error: {
				message: 'Not implemented yet'
			}
		});
	});

router.route('/login/')
	.get(function(req, res){
		if (req.session.user){
			res.redirect('/');
			return;
		}

		var locals = {action: '/login/'},
			view = 'login';
		res.render(view, locals);
	})
	.post(function(req, res){
		if (!req.body.email || !req.body.password){
			var locals = {
				action: '/login/',
				error: 'Email or password missing'
			};
			res.render('login', locals);
			return;
		}

		res.status(501).json({
			error: {
				message: 'Not implemented yet'
			}
		});
	});

router.get('/logout/', function(req, res){
	delete req.session.user;
	res.redirect('/');
});

module.exports = router;
