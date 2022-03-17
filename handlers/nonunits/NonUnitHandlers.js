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
    console.log('FilletHandler processing ingredient.')
    if (req.getIngredient().split(' ').includes(unit)) {
      console.log("Unit 'fillet' found in " + req.getIngredient());
      return unit;
    }else{
      console.log('Fillet not found.');
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
    console.log('TeasponHandler processing ingredient.')
    if (req.getIngredient().split(' ').includes(unit)) {
      console.log("Unit 'cube' found in " + req.getIngredient());
      return unit;
    }else{
      console.log('cube not found.');
      return this.nextObjInChain.processIngredient(req);
    }
  }
}

module.exports = { FilletHandler, CubeHandler};
