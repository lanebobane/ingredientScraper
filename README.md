# ingredientScraper
Exploring CheerioJS and Chain of Responsibility by making a simple app that allows the user to input a recipe URL and outputs list of Ingredient objects, populated for quantity, unit and item.

## Commands

1. `npm run scraper`: runs a demo of the `ingredientScraper` module.
2. `npm run cor`: runs a demo of the ingredient handlers.

## Resources

- https://www.educative.io/collection/page/5429798910296064/5725579815944192/5927001794805760
- https://refactoring.guru/design-patterns/chain-of-responsibility
- https://github.com/webdevjourneyWDJ/Design-Patterns/tree/master/chain_of_responsibility
- https://www.scrapingbee.com/blog/web-scraping-javascript/

## Different types of ingredient units

#### Item _is_ the unit

- 3 medium carrots
- 2 potatoes
- 1 large head cabbage
- 1 (8-12 lb) brisket
- One big-ass pork shoulder
- 1 bay leaf

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

- 1 jar pickles
- 2 cans tomato sauce
- 3 packets yeast

#### Edge/Undetermined Cases

- 1 clove garlic, smashed. Is this it's own ingredient? If it was in a recipe that contained other garlic, would that garlic be listed separately? For prep they are separate, but for shopping they are the same.
- 1/3 cup green onions, sliced
- 3-4 cloves garlic, grated, there does seem to always be a comma. Could everything after the comma be ignored for purposes of creating the shopping list? Another example being: "crushed red pepper flakes, to taste".
- 4 squares brown rice ramen noodles, or 6 ounces rice noodles. How to handle ORs?
- 1 (8-10 lb) brisket. How to preserve the "8-10 lb" size while still adding "1 brisket" to the shopping list, since an entire brisket is called for, not 8-10 lbs of smaller briskets.

## Most-concise ingredient line

`ingredientScraper` gathers the "most concise ingredient" from the source page's HTML page body. Due to variation in page design, this may sometimes include undesired characters like checkboxes. That is expected and the ingredient handlers can handle for this.

#### No issues, clean
10 small red potatoes

#### Contains checkbox
▢ 1 jar (16 ounce)  roasted red peppers, drained




