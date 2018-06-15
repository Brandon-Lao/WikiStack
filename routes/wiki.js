const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const addPage = require('../views/addPage');
const Sequelize = require('sequelize');
const wikiPage = require('../views/wikipage');
const mainPage = require('../views/main');

const {Page} = require("../models/");


router.use(bodyParser.urlencoded({extended:false}));
//**THESE ROUTERS SHOULD 'get' JUST/ and /add
//**BUT GO TO  /wiki/ AND SUCH, REPLACE '/wiki/', ETC LATER
router.get('/add', (req, res, next) =>
	{
		res.send(addPage());
	});

router.get('/', async (req, res, next) =>
	{
		let newPage = await Page.findAll();
		let mainStr = "";
		for (let i = 0; i < newPage.length; i++)
		{
			mainStr+="<a href = wiki/" + newPage[0].slug + ">" + newPage[0].title + "</a>";
		}
		res.send(mainPage(mainStr));
	});

router.post('/', async (req, res, next) =>
	{
		const postPage = new Page(
		{
			title: req.body.title,
			content: req.body.content
		});

		try
		{
			await postPage.save();
			res.redirect(`/wiki/${postPage.slug}`);
			return;
		}
		catch (error) {next(error);}
	});

router.get('/:slug', async(req,res,next) =>
	{
		try
		{
			const page = await Page.findOne(
			{
				where: 
				{
					slug:req.params.slug
				}
			});
			res.send(wikiPage(page,page.author));
		}
		catch (error) {next(error)}
	});

module.exports = router;
