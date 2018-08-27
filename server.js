const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const cors = require('cors');
const path = require('path');
const app = express();


app.use(cors());
//MYSQL Connection
const mysql_con = require('./database/config');
const api = require('./routes/api');

// Serving static files
app.use(express.static(path.join(__dirname, 'src/app/app.html')));

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false 	}));


app.get('/', (req, res) => {
	res.send('Working Properly');
});


 app.use('/api', api);


const port = process.env.PORT || 3000;

app.listen(port , function(){
	console.log('Server running On Port 3000');
});