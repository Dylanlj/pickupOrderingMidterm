# Node Skeleton

## Project Setup

1. Create your own empty repo on GitHub
2. Clone this repository (do not fork)
  - Suggestion: When cloning, specify a different folder name that is relevant to your project
3. Remove the git remote: `git remote rm origin`
4. Add a remote for your origin: `git remote add origin <your github repo URL>`
5. Push to the new origin: `git push -u origin master`
6. Verify that the skeleton code now shows up in your repo on GitHub

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Fix to binaries for sass: `npm rebuild node-sass`
5. Run migrations: `npm run knex migrate:latest`
  - Check the migrations folder to see what gets created in the DB
6. Run the seed: `npm run knex seed:run`
  - Check the seeds file to see what gets seeded in the DB
7. Run the server: `npm run local`
8. Visit `http://localhost:8080/`

## Dependencies

- Node 5.10.x or above
- NPM 3.8.x or above

-----------------------------------------------------

## User stories

User wants to be able to order multiple food items and/or drinks, and know how much time it will take to complete the order

- Need login and registration for user so that website can respond to them (through twilio)
- User: Name, phonenumber, email
- Food: Name, size, price, description, URL to image
- Drinks: Name, size, category, price, description, URL to image
- OrderFood: food_id (FK), quantity_item, total price
- OrderDrinks: drink_id (FK), quantity_item, total price

Quantity_item_food, Quantity_item_drink, food_id, total_price

## Needed functions

1. / (home)
- Main scrolling picture probably will just be references from a URL
- Images of all restaurants, name, address

2. rest/:id/dashboard (needs unique ID)
Renato needs to populate each restaurant page with a list of food items, name, prices, etc. (send back items)
















