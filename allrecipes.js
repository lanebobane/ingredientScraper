// https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/

const axios = require('axios');
const cheerio = require('cheerio');

const allrecipes = async (url) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const ingredients = [];

		$('.ingredients-item-name').each((_idx, el) => {
			const postTitle = $(el).text()
			ingredients.push(postTitle)
		});
    // console.log(postTitles)
		return ingredients;
	} catch (error) {
		throw error;
	}
};


module.exports = {allrecipes};
