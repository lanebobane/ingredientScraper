const axios = require('axios');
const cheerio = require('cheerio');

// Takes a URL (of the target receipe) and a CSS identifier that contains the single ingredient.
// This identifier should be the element that most concisely contains the entire ingredient.
// Some websites break quantity, unit and item into separate elements, so the "most concise" may
// sometimes contain undesired data (e.g. checkboxes with Half-Baked Harvest).

const ingredientScraper = async (url, identifier) => {
	try {
		const { data } = await axios.get(url);
		const $ = cheerio.load(data);
		const ingredients = [];

		$(identifier).each((_idx, el) => {
			const postTitle = $(el).text()
			ingredients.push(postTitle)
		});
		return ingredients;
	} catch (error) {
		throw error;
	}
};


module.exports = {ingredientScraper};
