const UnitHandlerChain = require('./UnitHandlerChain');
const Ingredient = require('./Ingredient')

let chain = new UnitHandlerChain('chainchainchain');
let cup = new Ingredient('1 cup broth');
let tsp = new Ingredient('1 tsp salt');
let rig = new Ingredient('1 rig riggity')

let result1 = chain.process(cup);
let result2 = chain.process(tsp);
let result3 = chain.process(rig);

console.log(result1);
console.log(result2);
console.log(result3);
