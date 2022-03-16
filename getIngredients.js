

const axios = require('axios');
const cheerio = require('cheerio');

const getIngredients = async (url, identifier) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const ingredients = [];

		$(identifier).each((_idx, el) => {
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
