const ingredientScraper = require('../ingredientScraper');

// https://www.halfbakedharvest.com/basil-garlic-oil-noodles/
// hbh: 'li.wprm-recipe-ingredient'
// ar: '.ingredients-item-name'
const hbhid = 'li.wprm-recipe-ingredient'
const arid = '.ingredients-item-name'

const hbh1 = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/';
const hbh2 = 'https://www.halfbakedharvest.com/parchment-baked-roasted-red-pepper-salmon/'
const hbh3 = 'https://www.halfbakedharvest.com/crispy-chicken-tinga-tacos/'
const ar1 = 'https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/';

// halfbakedharvest(hbh).then(x => console.log(x));
// allrecipes(ar).then(y => console.log(y));
let arlist1 = ingredientScraper(ar1, arid).then(a => console.log(a));
let hbhlist3 = ingredientScraper(hbh3, hbhid).then(b => console.log(b));
let hbhlist1 = ingredientScraper(hbh1, hbhid).then(b => console.log(b));
let hbhlist2 = ingredientScraper(hbh2, hbhid).then(b => console.log(b));


// isolate units
// let arlist1 = getIngredients(ar1, arid).then(a => console.log(isolateUnits(a, 0)));
// let hbhlist31 = getIngredients(hbh3, hbhid).then(a => console.log(isolateUnits(a, 0)));
// let hbhlist11 = getIngredients(hbh1, hbhid).then(a => console.log(isolateUnits(a, 1)));
// let hbhlist21 = getIngredients(hbh2, hbhid).then(a => console.log(isolateUnits(a, 2)));


