const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');

const PORT = process.env.PORT || 80;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('dotenv').config();
//restricting the request to just localhost3000
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

const session = require('express-session');
app.use(
  session({
    secret: '4MtipZ6wA6',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);
let connection;
// Creating databse connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB,
  });
}

// Connecting to database
connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected to database!');
});
module.exports = connection;

// Simple route
app.get('/', (req, res) => {
  if (!req.session.userID) {
    console.log('Welcome to miah');
    res.json({ message: 'Welcome to miah' });
  } else {
    res.json({ message: 'NOT LOGGED IN' });
    console.log('NOT LOGGED IN');
  }
});

require('./back-end/routes/miah.routes')(app);

//for heroku (production mode)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Port
app.listen(PORT, () => console.log(`listening on port ${process.env.PORT}`));
