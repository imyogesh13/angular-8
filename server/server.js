var express = require("express");
var bosyParser = require('body-parser');
var cors = require('cors');

const PORT =3000;
const app = express();
app.user(bosyParser.json());
app.user(cors());

app.get('/', function(req, res){
 res.send("Hello from express");
});

app.listen(PORT,function(){
  console.log("Server running on localhost:"+PORT);
})