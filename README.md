# ingredientScraper
Exploring CheerioJS and Chain of Responsibility by making a simple app that allows the user to input a recipe URL and outputs list of Ingredient objects, populated for quantity, unit and item.

## Commands

1. `npm run scraper`: runs a demo of the `ingredientScraper` module.
2. `npm run cor`: runs a demo of the ingredient handlers.
3. `npm run start`: runs the main app.

## Resources

- https://www.educative.io/collection/page/5429798910296064/5725579815944192/5927001794805760
- https://refactoring.guru/design-patterns/chain-of-responsibility
- https://github.com/webdevjourneyWDJ/Design-Patterns/tree/master/chain_of_responsibility
- https://www.scrapingbee.com/blog/web-scraping-javascript/

## Different types of ingredient units

#### Exact units

Includes: cup, teaspoon, tablespoon, milliliter, liter, pint, ounce, quart, gallon, fluid ounces,
gram, kilogram.

- 1 cup chicken broth
- 2 tsp salt
- 8 oz ground beef
- 100 mL water

#### Non-exact units
Source: (https://ottogrills.com/blogs/post/what-is-tad-dash-smidgen)
Includes: fillet, dollop, jar, can, clove, cube, pinch, sprinkle, drizzle, gill, slather, tad, dash,
drop, hint, smidgen, scant.

- 2 fillets salmon
- 2 dollops of mayonaise
- 1 jar sauce
- 1 can chicken noodle soup
- 1 clove garlic
- 1 cube boullion
- pinch of salt

#### Item _is_ the unit

- 3 medium carrots
- 2 potatoes
- 1 large head cabbage
- 1 (8-12 lb) brisket
- One big-ass pork shoulder
- 1 bay leaf

#### No units

- salt to taste

#### Edge/Undetermined Cases

- 1 clove garlic, smashed. Is this it's own ingredient? If it was in a recipe that contained other garlic, would that garlic be listed separately? For prep they are separate, but for shopping they are the same.
- 1/3 cup green onions, sliced
- 3-4 cloves garlic, grated, there does seem to always be a comma. Could everything after the comma be ignored for purposes of creating the shopping list? Another example being: "crushed red pepper flakes, to taste".
- 4 squares brown rice ramen noodles, or 6 ounces rice noodles. How to handle ORs?
- 1 (8-10 lb) brisket. How to preserve the "8-10 lb" size while still adding "1 brisket" to the shopping list, since an entire brisket is called for, not 8-10 lbs of smaller briskets.
- ▢ 1 jar (16 ounce)  roasted red peppers, drained, raw ingredient string sometimes contains undesired leading/trailing character.

## ingredientScraper Module Architecture

![ingredientScraper module architecture](https://github.com/lanebobane/ingredientScraper/blob/main/assets/ingredientScraper.png)


## Recipe-to-Route Architecture

![Recipe-to-Route architecture](https://github.com/lanebobane/ingredientScraper/blob/main/assets/recipe_to_route.png)

