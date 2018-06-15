const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addPage = require('../views/addPage');
const Sequelize = require('sequelize');

const {Page} = require("../models/");
console.log(Page);


router.use(bodyParser.urlencoded({extended:false}));
//**THESE ROUTERS SHOULD 'get' JUST/ and /add
//**BUT GO TO  /wiki/ AND SUCH, REPLACE '/wiki/', ETC LATER
router.get('/add', (req, res, next) =>
	{
		res.send(addPage());
	});

router.get('/', (req, res, next) =>
	{

	});

router.post('/', async (req, res, next) =>
	{
		console.log(req.body);
		res.json(req.body);

		const postPage = new Page(
		{
			title: req.body.title,
			content: req.body.content
		});

		try
		{
			await postPage.save();
			console.log(postPage);
			return res.redirect('/');
		}
		catch (error) {next(error)}
	});


module.exports = router;
