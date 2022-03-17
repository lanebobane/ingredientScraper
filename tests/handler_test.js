const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const UnitHandlerChain = require('../handlers/unit/UnitHandlerChain')
const NonUnitHandlerChain = require('../handlers/nonunits/NonUnitHandlerChain')
const Ingredient = require('../ingredient/Ingredient')

chai.use(chaiAsPromised);

describe('Ingredient Handlers', () => {

  describe('Ingredient Handlers', () => {

    describe('Standardized Unit Handlers', () => {

      let chain = new UnitHandlerChain('unitchain');

      let cup = new Ingredient('1 cup broth');
      let tsp = new Ingredient('1 tsp salt');
      let rig = new Ingredient('▢ 1 jar (16 ounce) roasted red peppers, drained')

      it('Finds CUP when present',  () => {
        const unit = 'cup'
        const response = chain.process(cup)
        expect(response).to.equal(unit);
        expect(response).to.be.an('string');
      });

      it('Does not find CUP when not present',  () => {
        const unit = 'cup'
        const response = chain.process(tsp)
        expect(response).to.not.equal(unit);
        expect(response).to.be.an('string');
      });


    });

    // Non Standard Unit Handlers

  });
});
