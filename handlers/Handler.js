class HandlerChain
{
   setNextObj(nextObjInChain){}
   processIngredient(req){
     console.log("No handler found for ingredient: " + req.getIngredient());
     return null;
   }
}

module.exports = HandlerChain;
