"use strict";
// REQUIRES
const express = require('express');
const app = express();
const fs = require("fs");
const mysql = require('mysql');
const bodyParser = require('body-parser');


const msg404 = 'Err!! We could not find what you are looking for. Please try again';

app.use('/js', express.static('client/js'))
app.use('/css', express.static('client/css'))
app.use('/img', express.static('client/img'))




app.get('/', function (req, res) {


  // Let's build the DB if it doesn't exist
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    multipleStatements: true
  });

  const createDBAndTables = `CREATE DATABASE IF NOT EXISTS assignment;
        use assignment;
        CREATE TABLE IF NOT EXISTS appUser (
        userID int NOT NULL AUTO_INCREMENT,
        userName varchar(40),
        location varchar(30),
        gasBool varchar(30),
        emission int(10),
        PRIMARY KEY (userID));
        INSERT INTO appUser (userName, location, gasBool, emission) values ('madhav', 'vancouver', 'no', '23');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('sam', 'burnaby', 'yes', '27');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('john', 'surrey', 'no', '12');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('harleen', 'vancouver', 'no', '25');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('aaron', 'richmond', 'yes', '32');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('dustin', 'north vancouer', 'yes', '23');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('henry', 'vanouver', 'yes', '14');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('scott', 'downtown', 'no', '87');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('smith', 'burnaby', 'no', '27');
        INSERT INTO appUser (userName, location, gasBool, emission) values ('justin', 'surrey', 'yes', '23');`;

  connection.connect();
  connection.query(createDBAndTables, function (error, results, fields) {
    if (error) {
      throw error;
    }

  });
  connection.end();

  let doc = fs.readFileSync('./client/html/index.html', "utf8");
  res.send(doc);
});


app.get('/get-users', function (req, res) {

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();
  connection.query('SELECT * FROM appUser', function (error, results, fields) {
    if (error) {
      throw error;
    }
    console.log('Rows returned are: ', results);
    res.send({
      status: "success",
      rows: results
    });

  });
  connection.end();


});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// parse application/json
app.use(bodyParser.json());

// Notice that this is a 'POST'
app.post('/add-user', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  console.log("username", req.body.userName);
  console.log("location", req.body.location);
  console.log("gas vehicle", req.body.gasBool);
  console.log("emissions", req.body.emission);

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('INSERT INTO appUser (userID, userName, location, gasBool, emission) values (?, ?, ?, ?, ?)',
    [req.body.userID, req.body.userName, req.body.location, req.body.gasBool, req.body.emission],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded added."
      });

    });
  connection.end();

});

app.post('/delete-all-users', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();
  // REALLY A DUMB THING TO DO, BUT JUST SHOWING YOU CAN
  connection.query('DELETE FROM appUser',
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      //console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded all deleted."
      });

    });
  connection.end();

});

app.post('/update-userBool', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('UPDATE appUser SET gasBool = ? WHERE userID = ?',
    [req.body.gasBool, req.body.id],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded updated."
      });

    });
  connection.end();

});
app.post('/update-userName', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('UPDATE appUser SET userName = ? WHERE userID = ?',
    [req.body.userName, req.body.id],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded updated."
      });

    });
  connection.end();

});

app.post('/update-userLocation', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('UPDATE appUser SET location = ? WHERE userID = ?',
    [req.body.location, req.body.id],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded updated."
      });

    });
  connection.end();

});

app.post('/update-userEmission', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('UPDATE appUser SET emission = ? WHERE userID = ?',
    [req.body.emission, req.body.id],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded updated."
      });

    });
  connection.end();

});

app.post('/delete-user', function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'assignment'
  });
  connection.connect();

  connection.query('DELETE FROM appUser WHERE userID = ?',
    [req.body.userID],
    function (error, results, fields) {
      if (error) {
        throw error;
      }
      // console.log('Rows returned are: ', results);
      res.send({
        status: "success",
        msg: "Recorded deleted."
      });

    });
  connection.end();

});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
  console.log('App listening on port ' + port + '!');
})