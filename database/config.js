const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  database : 'railways'
});

connection.connect(function(err, connect){
	if(err){
		console.log(err);
	}else{
		console.log('connected to database');
	}
});


module.exports = connection;