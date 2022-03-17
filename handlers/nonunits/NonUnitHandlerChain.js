const {FilletHandler,CubeHandler} = require('./NonUnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class UnitHandlerChain {
  constructor(name){
    this.name = name;
    let fillet = new FilletHandler();
    let cube = new CubeHandler();
    // cup.setNextObj(tsp);
    fillet.setNextObj(cube);
    this.firstUnit = fillet;
  }

  process(req){
    return this.firstUnit.processIngredient(req);
  }
}

module.exports = UnitHandlerChain




