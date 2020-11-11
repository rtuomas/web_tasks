var express = require('express');
var app = express();
var mysql = require('mysql');
var url = require('url');
const util = require('util');
var path = require('path');
//var query = require('query');


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootPass",
  database: "example_db"
});


const query = util.promisify(con.query).bind(con);



app.get('/', function (req, res) {

  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM location", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
  });

  console.log("Got a GET request for the homepage");
  //res.send('Hello GET');
});



//HUOM */API/* => */*
// parametrien kirjoitustapa selaimessa : http://localhost:8080/api/events?start=2019-11-01&end=2020-11-29
app.get("/api/events", function (req, res) {
  console.log("Get events from a certain period");
  var q = url.parse(req.url, true).query;
  var params = q.start + " " + q.end;
  var startDate = q.start;
  var endDate = q.end;
  var alteredResult;
  var string;
  // res.send("Getting events: "+params);


  var sql = "SELECT event_date.Date, event.Name, event.Type, Location.Location_name"
      + " FROM event_date, event, location"
      + " WHERE event_date.Event_id = event.Event_id and event.Location_Location_id = Location.Location_id"
      + " and event_date.Date >= ? and event_date.Date <= ?"
      + " GROUP BY Name"
      + " ORDER BY event_date.Date";




  //console.log(startDate);
  //console.log(endDate);
  //startDate>endDate?console.log("ALKU SUUREMPI"):console.log("LOPPU SUUREMPI");

  (async () => {
    try {
      const rows = await query(sql,[startDate, endDate]);
      string = JSON.stringify(rows);
      alteredResult = '{"numOfRows":'+rows.length+',"rows":'+string+'}';
      console.log("ROWS:  ", rows);
      res.send(alteredResult);

    }
    catch (err) {
      console.log("Database error!"+ err);
    }
    finally {
      //conn.end();
    }
  })()


});

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
});

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})

var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})