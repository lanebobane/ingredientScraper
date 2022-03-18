const {CupHandler,TeaspoonHandler,TablespoonHandler} = require('./UnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class UnitHandlerChain {
  constructor(name){
    this.name = name;
    let cup = new CupHandler();
    let tsp = new TeaspoonHandler();
    let tbsp = new TablespoonHandler();
    cup.setNextObj(tsp);
    tsp.setNextObj(tbsp);
    this.firstUnit = cup;
  }

  process(req){
    return this.firstUnit.processIngredient(req);
  }
}

module.exports = UnitHandlerChain




