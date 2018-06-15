const express = require("express");
const morgan = require("morgan");
const layout = require("./views/layout.js");
const bodyParser = require('body-parser');
const models = require('./models');

const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');


const app = express();


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
// app.use('/posts', routes);
app.use('/wiki/', wikiRouter);

app.get("/", async(req, res, next) => {
  res.redirect('/wiki/');
});


const PORT = 1337;

const synchro = async() =>
{
	await models.db.sync({force: true});
	app.listen(PORT, () => {
	console.log(`App listening in port ${PORT}`);
});
};
models.db.authenticate().
then(() => {
  console.log('Database connection operational.');
});

synchro();

