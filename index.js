const {getIngredients} = require('./halfbakedharvest');
const util = require('util')

// const programming = getPostTitles('programming');
// const oldSchoolCool = getPostTitles('olschoolcool');

const url = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/'

let thing = getIngredients(url).then(x => console.log(x));
