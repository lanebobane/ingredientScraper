// Driver code that will basically put together each of the demos (scraper and handler).
const ingredientScraper = require('./ingredientScraper')
const UnitHandlerChain = require('./handlers/unit/UnitHandlerChain');
const NonUnitHandlerChain = require('./handlers/nonunits/NonUnitHandlerChain');
const Ingredient = require('./ingredient/Ingredient')

// can probably do something better to handle how all the chains are put together.
let chain = new UnitHandlerChain('unitchain');
let nonchain = new NonUnitHandlerChain('nonunitchain');
let chains = [chain, nonchain];

// logic for deciding a CSS identifier is here for now, until I can build a module
// to handle for identifying this value.
const getIngredients = async (url) => {
  let cssid = ''
  if(url.split('.').includes('halfbakedharvest')){
    cssid = 'li.wprm-recipe-ingredient';
  }
  else if (url.split('.').includes('allrecipes')){
    cssid = '.ingredients-item-name';
  }

  let rawIngs = await ingredientScraper(url, cssid)
  let ingClassObjects = rawIngs.map(rawIng => {
    return new Ingredient(rawIng);
  })

  ingClassObjects.forEach(ing => {
    for(let chain of chains){
      chain.process(ing);
    }
  })

  console.log(ingClassObjects)



}

const hbh1 = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/';
const hbh2 = 'https://www.halfbakedharvest.com/parchment-baked-roasted-red-pepper-salmon/'
const hbh3 = 'https://www.halfbakedharvest.com/crispy-chicken-tinga-tacos/'
const ar1 = 'https://www.allrecipes.com/recipe/16310/corned-beef-and-cabbage-i/';


getIngredients(hbh1)
