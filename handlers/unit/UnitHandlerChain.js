const {CupHandler,TeaspoonHandler} = require('./UnitHandlers')

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




