const {getIngredients} = require('./getIngredients');

// https://www.halfbakedharvest.com/basil-garlic-oil-noodles/
// hbh: 'li.wprm-recipe-ingredient'
// ar: '.ingredients-item-name'
const hbhid = 'li.wprm-recipe-ingredient'
const arid = '.ingredients-item-name'

const hbh = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/';
const ar = 'https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/';

// halfbakedharvest(hbh).then(x => console.log(x));
// allrecipes(ar).then(y => console.log(y));
getIngredients(ar, arid).then(a => console.log(a));
getIngredients(hbh, hbhid).then(b => console.log(b));
