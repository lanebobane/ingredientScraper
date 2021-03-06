const HandlerChain = require('../Handler')

class IituHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
    this.unit = 'iitu'
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    for(let ing of req.getIngredient().split(' ')){
      let value = parseInt(ing)
      if(typeof value === 'number' && !req.getUnit()) {
        req.setUnit('iitu');
      }
    }
  }
}

module.exports = { IituHandler };
