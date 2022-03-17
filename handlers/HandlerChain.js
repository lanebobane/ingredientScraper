class HandlerChain
{
   setNextObj(nextObjInChain){}
   processIngredient(req){
     console.log("No handler found for ingredient: " + req.getIngredient());
     return 'No unit found'
   }
}

module.exports = HandlerChain;
