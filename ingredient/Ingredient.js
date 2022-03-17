class Ingredient
{
  constructor(ingredient){
    this.ingredient = ingredient;
    this.quantity = null;
    this.unit = null;
    this.item = null;
  }

  // GETTERS

  getIngredient(){
    return this.ingredient;
  }

  getQuantity(){
    return this.quantity;
  }

  getUnit(){
    return this.unit;
  }

  getItem(){
    return this.item;
  }

  //SETTERS

  setQuantity(quantity){
    this.quantity = quantity;
    return this.quantity;
  }

  setUnit(unit){
    this.unit = unit;
    return this.unit;
  }

  setItem(item){
    this.unit = item;
    return this.item;
  }

}

module.exports = Ingredient;
