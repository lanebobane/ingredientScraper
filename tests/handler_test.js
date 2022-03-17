const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const UnitHandlerChain = require('../handlers/unit/UnitHandlerChain')
const NonUnitHandlerChain = require('../handlers/nonunits/NonUnitHandlerChain')
const Ingredient = require('../ingredient/Ingredient')

chai.use(chaiAsPromised);

describe('Ingredient Handlers', () => {

  describe('Standardized Unit Handlers', () => {

  let chain = new UnitHandlerChain('unitchain');

  let cup = new Ingredient('1 cup broth');
  let tsp = new Ingredient('1 tsp salt');
  let rig = new Ingredient('')

    describe('Cup Unit Handlers', () => {
      const unit = 'cup'
      it('Finds CUP when present',  () => {
        const response = chain.process(cup)
        expect(response).to.equal(unit);
        expect(response).to.be.an('string');
      });

      it('Does not find CUP when not present',  () => {
        const response = chain.process(rig)
        expect(response).to.equal(null);
      });
    });

    describe('Teaspoon Unit Handlers', () => {
      const unit = 'tsp'
      it('Finds TSP when present',  () => {
        const response = chain.process(tsp)
        expect(response).to.equal(unit);
        expect(response).to.be.an('string');
      });

      it('Does not find TSP when not present',  () => {
        const response = chain.process(rig)
        expect(response).to.equal(null);
      });



    });

  });

  describe('Non-Standardized Unit Handlers', () => {

    let chain = new NonUnitHandlerChain('nonunitchain');

    let fil = new Ingredient('1 fillet salmon');
    let cub = new Ingredient('1 cube boullion');
    let rig = new Ingredient('')

      describe('Fillet Unit Handlers', () => {
        const unit = 'fillet'
        it('Finds FILLET when present',  () => {
          const response = chain.process(fil)
          expect(response).to.equal(unit);
          expect(response).to.be.an('string');
        });

        it('Does not find FILLET when not present',  () => {
          const response = chain.process(rig)
          expect(response).to.equal(null);
        });
      });

      describe('Cube Unit Handlers', () => {
        const unit = 'cube'
        it('Finds CUBE when present',  () => {
          const response = chain.process(cub)
          expect(response).to.equal(unit);
          expect(response).to.be.an('string');
        });

        it('Does not find CUBE when not present',  () => {
          const response = chain.process(rig)
          expect(response).to.equal(null);
        });



      });

    });

});
