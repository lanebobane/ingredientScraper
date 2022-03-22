const {CupHandler,TeaspoonHandler,TablespoonHandler,OunceHandler} = require('./ExactUnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class ExactUnitHandlerChain {
  constructor(name){
    this.name = name;
    let cup = new CupHandler();
    let tsp = new TeaspoonHandler();
    let tbsp = new TablespoonHandler();
    let oz = new OunceHandler();
    cup.setNextObj(tsp);
    tsp.setNextObj(tbsp);
    tbsp.setNextObj(oz);
    this.firstUnit = cup;
  }

  process(req){
    return this.firstUnit.processIngredient(req);
  }
}

module.exports = ExactUnitHandlerChain




