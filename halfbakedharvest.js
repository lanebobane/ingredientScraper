// https://www.halfbakedharvest.com/basil-garlic-oil-noodles/


const axios = require('axios');
const cheerio = require('cheerio');

const getIngredients = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const ingredients = [];

		$('li.wprm-recipe-ingredient').each((_idx, el) => {
			const postTitle = $(el).text()
			ingredients.push(postTitle)
		});
    // console.log(postTitles)
		return ingredients;
	} catch (error) {
		throw error;
	}
};


module.exports = {getIngredients};
