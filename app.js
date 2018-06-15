const express = require("express");
const morgan = require("morgan");
// const client = require("./db");
const layout = require("./views/layout.js");
const bodyParser = require('body-parser');
const { db } = require('./models');

const app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
// app.use('/posts', routes);

app.get("/", (req, res) => {
  res.send(layout(''));
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

db.authenticate().then(() => 
{
	console.log('Database connection online.');
});
