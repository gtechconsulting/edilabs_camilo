'use strict';

var con = require('./../../config/db');

var User = function(user){
  this.id = user.id;
  this.name = user.name;
  this.email = user.email;
  this.job = user.job;
  this.reports_to = user.reports_to;
};


User.findById = function (id, result) {
	let sql = 'SELECT * FROM users WHERE id = ?';
	
	con.query(sql, id, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log(row);
		result(null, row);
	});
};

User.findByName = function (name, result) {
	let sql = 'SELECT * FROM users WHERE name = ?';
	
	con.query(sql, name, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log('rows: ', rows);
		result(null, rows);
	});
};

User.findAll = function (result) {
	let sql = 'SELECT * FROM users';
	
	con.query(sql, (err, rows, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log(rows);
		result(null, rows);
	});
};

User.create = function (newUser, result) {	
	let data = [newUser.name, newUser.email, newUser.job, newUser.reports_to];
	
	let sql = 'INSERT INTO users(name, email, job, reports_to) VALUES(?, ?, ?, ?)';
	
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log(row.insertId);
		result(null, row.insertId);
	});
};

User.update = function(user, result){
	let data = [user.name, user.email, user.job, user.reports_to, user.id];
	
	let sql = 'UPDATE users SET name = ?, email = ?, job = ?, reports_to = ? WHERE id = ?';
	
	con.query(sql, data, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);
		
		console.log(row.affectedRows);
		result(null, row.affectedRows);
	});
};

User.delete = function(id, result){
	let validateSql = "SELECT * FROM users WHERE reports_to = ?";
	let sql = 'DELETE FROM users WHERE id = ?';

	con.query(validateSql, id, (err, row, fields) => {
    console.log("error: ", err);
    if (err) result(err, null);

	if(row.length > 0) {
		let error = "you need to change the subordinates reference";
		result(null, error);
	}else {
		con.query(sql, id, (err, row, fields) => {
		console.log("error: ", err);
		if (err) result(err, null);

		console.log(row.affectedRows);
		result(null, row.affectedRows);
		});
	}   
  });
};

module.exports= User;