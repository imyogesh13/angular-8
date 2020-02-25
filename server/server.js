var express = require("express");
var bosyParser = require('body-parser');
var cors = require('cors');

const PORT =3000;
const app = express();
app.user(bosyParser.json());
app.user(cors());