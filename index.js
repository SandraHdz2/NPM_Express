var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hola Mundo en Express')
})

app.listen(3000,function(){
  console.log("Mi primer server corriendo en http://localhost:3000");
});
