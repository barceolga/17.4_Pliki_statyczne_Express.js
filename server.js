var express = require ('express');
var bodyParser = require ('body-parser');
var app = express();

app.use(express.static('assets'));
app.use(express.static('files'));

app.get('/', function (req, res) {
  res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
    const response = {
      first_name: req.query.first_name,
      last_name: req.query.last_name,
      mobile_phone: req.query.mobile_phone
    };
    res.end(JSON.stringify(response));
})
/*
app.get('/style.css', funtcion (req, res)  {

})*/

var server = app.listen(3000, 'localhost', function() {
   var host = server.address().address;
   var port = server.address().port;

   console.log("The default application is listening on http://" + host + ':' + port);
})
