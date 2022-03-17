const {CupHandler,TeaspoonHandler} = require('./UnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class UnitHandlerChain {
  constructor(name){
    this.name = name;
    let cup = new CupHandler();
    let tsp = new TeaspoonHandler();
    // cup.setNextObj(tsp);
    tsp.setNextObj(cup);
    this.firstUnit = tsp;
  }

  process(req){
    return this.firstUnit.processIngredient(req);
  }
}

module.exports = UnitHandlerChain




