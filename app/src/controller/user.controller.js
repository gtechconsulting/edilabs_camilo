'use strict';

const User = require('../model/user.model');

exports.findById = function(req, res) {
	const id = req.params.id;
	
	if (!id) {
		return res.status(400).send('The required path variable id is missing')
	}
	
	User.findById(id, function(err, user) {
		if (err) return res.status(500).send('Error occured during fetching user for id ' + id);
		console.log('user: ', user);
		
		return res.send(user);
	});
};

exports.findByName = function(req, res) {
	const name = req.body.name
	
	// 400 = bad request
	if (!name) {
		return res.status(400).send('The required field name is missing')
	}
	
	User.findByName(name, function(err, users) {
		if (err) return res.status(500).send('Error occured during fetching user for name ' + name);
		
		console.log('users: ', users);
		
		return res.send(users);
	});
};

exports.findAll = function(req, res) {
	User.findAll(function(err, users) {
		if (err) return res.status(500).send('Error occured during fetching users');
		console.log('users: ', users);
		
		return res.send(users);
	});
};

exports.create = function(req, res) {
	const newUser = new User(req.body);
	
	if(req.body.constructor === Object && Object.keys(req.body).length === 0){
		return res.status(400).send('One or more required fields are missing');
	} if (!newUser.name || !newUser.email || !newUser.job || !newUser.reports_to) {		
		return res.status(400).send('One or more required fields are missing')
	} else {		
		User.create(newUser, function(err, user_id) {
			console.log('err: ', err);

			if (err || user_id <= 0) return res.status(500).send('Error occured during saving user');
			
			return res.sendStatus(200);
		});
	}
};

exports.update = function(req, res) {
	const user = new User(req.body);
	
	if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
		return res.status(400).send('One or more required fields are missing');
	} if (!newUser.name || !newUser.email || !newUser.job || !newUser.reports_to) {		
		return res.status(400).send('One or more required fields are missing');
	} else {
		User.update(user, function(err, result) {
			if (err || result <= 0) return res.status(500).send('Error occured during updating user');
			
			return res.sendStatus(200);
		});
	}
};

exports.delete = function(req, res) {
	const id = req.params.id;
	
	if (!id) {
		return res.status(400).send('The required path variable id is missing');
	}
	
	User.delete(id, function(err, user) {
		if (err) return res.status(500).send('Error occured during deleting user');
		
		return res.sendStatus(200);
	});
};