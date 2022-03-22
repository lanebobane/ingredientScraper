const {IituHandler} = require('./IituUnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class IituUnitHanlderChain {
  constructor(name){
    this.name = name;
    let iitu = new IituHandler();
    this.firstUnit = iitu;
  }

  process(req){
    return this.firstUnit.processIngredient(req);
  }
}

module.exports = IituUnitHanlderChain




