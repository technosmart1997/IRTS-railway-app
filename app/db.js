const con = require('../database/config');

// CREATING A USER FUNCTION

var db = {};

module.exports.findUserByZone = function(zone,callback){

		let cmd = "select * from officers_list where zone = '"+ zone +"'";
		con.query(cmd, callback);
}

module.exports.findUserByGrade = function(grade,callback){
		
		let cmd = "select * from officers_list where grade like '"+ grade +"%'";
		con.query(cmd, callback);
}

module.exports.findUserByBatch = function(batch, callback){
	let cmd = "select * from officers_list where batch = '"+ batch +"'";
	con.query(cmd,callback);
}

module.exports.findUserByPosted = function(posted, callback){
	console.log(posted);
	let cmd = "select * from officers_list where posted_at like '"+posted+"%'";
	con.query(cmd,callback);
} 

module.exports.addNewUser = function(user, callback){
	// console.log(user);
	let cmd = "insert into users (name,username,password,dob,batch,email,phone) values ('"+ user.name +"', '"+ user.username +"' , '"+ user.password+"','"+ user.dob +"', '"+ user.batch +"' , '"+ user.email+"' , '"+ user.mobile +"')";
	con.query(cmd,callback);
}

module.exports.loginUser = function(user, callback){
	// console.log(user);
	let cmd = "select * from users where username  = '"+ user.username +"' and password = '"+ user.password +"'";
	con.query(cmd, callback);
}

module.exports.getUser = function(id, callback){
	// console.log(user);
	let cmd = "select * from users where user_id  = '"+ id +"'";
	con.query(cmd, callback);
}



