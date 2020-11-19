var express = require('express');
var app = express();
var bodyParser = require('body-parser');

const { check, validationResult } = require('express-validator');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/index.html', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/process_post', urlencodedParser,
    [check('first_name').isLength({ min: 2 }).withMessage("vähintään kaksi merkkiä!"),
      check('last_name').isLength({ min: 2 }).withMessage("vähintään kaksi merkkiä!"),
      check('age').isInt({min:0, max:120}).withMessage("Oikea ikä!"),
      check('email').isEmail().withMessage("Oikea s-posti!")],


      function (req, res) {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(422).json({errors: errors.array()});
        }

                // Prepare output in JSON format
          let response = {
            first_name: req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            age:req.body.age
          };
          console.log(response);
          res.end(JSON.stringify(response));
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
})