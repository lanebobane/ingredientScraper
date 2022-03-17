const UnitHandlerChain = require('../unit/UnitHandlerChain')
const NonUnitHandlerChain = require('../nonunits/NonUnitHandlerChain')
const Ingredient = require('../../ingredient/Ingredient')

let chain = new UnitHandlerChain('unitchain');
let nonchain = new NonUnitHandlerChain('nonunitchain');

let chains = [chain, nonchain];

let cup = new Ingredient('1 cup broth');
let tsp = new Ingredient('1 tsp salt');
let fil = new Ingredient('1 fillet salmon');
let cub = new Ingredient('1 cube boullion');
let rig = new Ingredient('▢ 1 jar (16 ounce) roasted red peppers, drained')

let ings = [cup, tsp, fil, cub, rig];

let results = [];

for(let ing of ings){
  for(let chain of chains){
    chain.process(ing);
  }
  results.push(ing);
}

console.log(results);
