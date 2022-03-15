const {halfbakedharvest} = require('./halfbakedharvest');
const {allrecipes} = require('./allrecipes');

// const programming = getPostTitles('programming');
// const oldSchoolCool = getPostTitles('olschoolcool');

const hbh = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/';
const ar = 'https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/';

halfbakedharvest(hbh).then(x => console.log(x));
allrecipes(ar).then(y => console.log(y));
