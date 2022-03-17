const HandlerChain = require('../Handler')

class FilletHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    const unit = 'fillet'
    if (req.getIngredient().split(' ').includes(unit)) {
      return unit;
    }else{
      return this.nextObjInChain.processIngredient(req);
    }
  }
}

class CubeHandler extends HandlerChain
{
  constructor(){
    super()
    this.nextObjInChain = new HandlerChain()
  }

  setNextObj(nextObj){
    this.nextObjInChain = nextObj;
  }

  processIngredient(req) {
    const unit = 'cube'
    if (req.getIngredient().split(' ').includes(unit)) {
      return unit;
    }else{
      return this.nextObjInChain.processIngredient(req);
    }
  }
}

module.exports = { FilletHandler, CubeHandler};
