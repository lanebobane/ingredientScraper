const HandlerChain = require('../Handler')

class CupHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
    this.unit = 'cup';
    this.units = ['cup', 'cups', 'Cup', 'Cups', 'CUP', 'CUPS', 'c', 'C'];
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    this.units.forEach(unit => {
      if (req.getIngredient().split(' ').includes(unit)) {
        req.setUnit(this.unit);
      }
    });
    if(req.getUnit()) return req.getUnit();
    else return this.nextObjInChain.processIngredient(req);
  }
}

class TeaspoonHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
    this.unit = 'teaspoon';
    this.units = ['tsp', 'TSP', 'teaspoon', 'teaspoons', 'Teaspoon', 'Teaspoons', 'TEASPOON', 'TEASPOONS'];
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    this.units.forEach(unit => {
      if (req.getIngredient().split(' ').includes(unit)) {
        req.setUnit(this.unit);
      }
    });
    if(req.getUnit()) return req.getUnit();
    else return this.nextObjInChain.processIngredient(req);
  }
}

class TablespoonHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
    this.unit = 'tablespoon';
    this.units = ['tbsp', 'TBSP', 'tablespoon', 'tablespoons', 'Tablespoon', 'Tablespoons', 'TABLESPOON', 'TABLESPOONS'];
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    this.units.forEach(unit => {
      if (req.getIngredient().split(' ').includes(unit)) {
        req.setUnit(this.unit);
      }
    });
    if(req.getUnit()) return req.getUnit();
    else return this.nextObjInChain.processIngredient(req);
  }
}

module.exports = { TeaspoonHandler, CupHandler, TablespoonHandler};
