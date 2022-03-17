const chai = require('chai');
const { expect } = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {ingredientScraper} = require('../ingredientScraper');

chai.use(chaiAsPromised);

describe('Ingredient Scraper', () => {

  describe('Ingredient Scraper', () => {

    describe('Ingredient Scraper', () => {

      const link = 'https://www.halfbakedharvest.com/basil-garlic-oil-noodles/';
      const id = 'li.wprm-recipe-ingredient';

      it('Gets ingredients when provided link and proper identifier', async () => {
        const response = await ingredientScraper(link, id);
        expect(response).to.be.an('array');
        expect(response[0].length > 0);
      });

    });

  });

});
