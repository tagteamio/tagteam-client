'use strict';

/**
 * @param {Object} req
 * @param {Object} res
 */
var index = function(req, res){
	var locals = {},
		view = 'index';

	if (!req.session.user){
		locals = {action: '/login/'};
		view = 'login';
	}

	res.render(view, locals);
};

/**
 * @param {Object} req
 * @param {Object} res
 */
var signup = function(req, res){
	if (req.session.user){
		res.redirect('/');
		return;
	}

	var locals = {action: '/signup/'},
		view = 'signup';
	res.render(view, locals);
};

/**
 * @param {Object} req
 * @param {Object} res
 */
var signupPost = function(req, res){
	if (!req.body.email || !req.body.password){
		var locals = {
			action: '/signup/',
			error: 'Email or password missing'
		};
		res.render('signup', locals);
		return;
	}

	res.json(501, {
		error: {
			message: 'Not implemented yet'
		}
	});
};

/**
 * @param {Object} req
 * @param {Object} res
 */
var login = function(req, res){
	if (req.session.user){
		res.redirect('/');
		return;
	}

	var locals = {action: '/login/'},
		view = 'login';
	res.render(view, locals);
};

/**
 * @param {Object} req
 * @param {Object} res
 */
var loginPost = function(req, res){
	if (!req.body.email || !req.body.password){
		var locals = {
			action: '/login/',
			error: 'Email or password missing'
		};
		res.render('login', locals);
		return;
	}

	res.json(501, {
		error: {
			message: 'Not implemented yet'
		}
	});
};

/**
 * @param {Object} req
 * @param {Object} res
 */
var logout = function(req, res){
	delete req.session.user;
	res.redirect('/');
};

module.exports = {
	index: index,
	signup: signup,
	signupPost: signupPost,
	login: login,
	loginPost: loginPost,
	logout: logout
};
