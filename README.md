# ingredientScraper
Exploring CheerioJS and Chain of Responsibility by making a simple app that allows the user to input a list of recipe URLs and outputs a tabulated list of ingredients.

## Resources

- https://www.educative.io/collection/page/5429798910296064/5725579815944192/5927001794805760
- https://refactoring.guru/design-patterns/chain-of-responsibility
- https://www.scrapingbee.com/blog/web-scraping-javascript/


## Different types of ingredients

#### Item _is_ the unit

- 3 medium carrots
- 2 potatoes
- 1 large head cabbage
- 1 (8-12 lb) brisket
- One big-ass pork shoulder


#### Specialized units

- 1 clove garlic
- 1 cube boullion

#### Standard units

- 1 cup chicken broth
- 2 tsp salt
- 8 oz ground beef
- 100 mL water

#### Non-standard units

- 2 fillets salmon
- 2 dollops of mayonaise

#### No units

- salt to taste

#### Container units

- 1 jar
- 2 cans
- 3 packets

#### Edge/Undetermined Cases

- 1 clove garlic, smashed. Is this it's own ingredient? If it was in a recipe that contained other garlic, would that garlic be listed separately? For prep they are separate, but for shopping they are the same.
