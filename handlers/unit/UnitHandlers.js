const HandlerChain = require('../Handler')

class CupHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    const unit = 'cup'
    if (req.getIngredient().split(' ').includes(unit)) {
      return unit;
    }else{
      return this.nextObjInChain.processIngredient(req);
    }
  }
}

class TeaspoonHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    const unit = 'tsp'
    if (req.getIngredient().split(' ').includes(unit)) {
      return unit;
    }else{
      return this.nextObjInChain.processIngredient(req);
    }
  }
}

module.exports = { TeaspoonHandler, CupHandler};
