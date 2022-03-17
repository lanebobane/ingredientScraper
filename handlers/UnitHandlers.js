const HandlerChain = require('./HandlerChain')

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
    console.log('CupHandler processing ingredient.')
    if (req.getIngredient().split(' ').includes(unit)) {
      console.log("Unit 'cup' found in " + req.getIngredient());
      return unit;
    }else{
      console.log('Cup not found.');
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
    console.log('TeasponHandler processing ingredient.')
    if (req.getIngredient().split(' ').includes(unit)) {
      console.log("Unit 'tsp' found in " + req.getIngredient());
      return unit;
    }else{
      console.log('tsp not found.');
      return this.nextObjInChain.processIngredient(req);
    }
  }
}



module.exports = { TeaspoonHandler, CupHandler};
