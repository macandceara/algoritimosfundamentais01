var express = require('express');
var app = express();
var port = 3001;
var bodyParser = require('body-parser');
app.use(bodyParser.json());

function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function divisao(a, b) {
  return a/b;
}

function multiplicacao(a, b) {
  return a * b;
}

app.get('/', function(req, res) {
  res.send('Oi, mundo teste :-)');
});


app.post('/soma', function (req, res) {
  var body = req.body;
  var resultado1 = soma(body.a, body.b);
   res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado1}`);
}); 

app.post('/subtracao', function (req, res) {
  var body = req.body;
  var resultado2 = subtracao(body.a, body.b);
   res.send(`O resultado da subtracao de ${body.a} e ${body.b} é ${resultado2}`);
}); 

app.post('/divisao', function (req, res) {
  var body = req.body;
  var resultado3 = divisao(body.a, body.b);
   res.send(`O resultado da divisao de ${body.a} e ${body.b} é ${resultado3}`);
}); 

app.post('/multiplicacao', function (req, res) {
  var body = req.body;
  var resultado4 = multiplicacao(body.a, body.b);
   res.send(`O resultado da multiplicacao de ${body.a} e ${body.b} é ${resultado4}`);
}); 


app.listen(port, function() {
  console.log(`Link http://localhost:${port}/`);
});






