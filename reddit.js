const axios = require('axios');
const cheerio = require('cheerio');

const getPostTitles = async (subreddit) => {
	try {
		const { data } = await axios.get(
			`https://old.reddit.com/r/${subreddit}/`
		);
		const $ = cheerio.load(data);
		const postTitles = [];

		$('div > p.title > a').each((_idx, el) => {
			const postTitle = $(el).text()
			postTitles.push(postTitle)
		});
    // console.log(postTitles)
		return postTitles;
	} catch (error) {
		throw error;
	}
};


module.exports = {getPostTitles};
