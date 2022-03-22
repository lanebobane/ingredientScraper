const {FilletHandler,CubeHandler} = require('./NonExactUnitHandlers')

// Configures the handler chain for the "standard units" handlers.

class NonExactHandlerChain {
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

module.exports = NonExactHandlerChain




