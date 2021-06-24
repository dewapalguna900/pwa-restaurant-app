const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const favoriteOneRestaurant = async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.restaurant__list__title a');

  const firstRestaurant = locate('.restaurant__list__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__list__title');

  const favoritedRestaurantTitle = await I.grabTextFrom('.restaurant__list__title a');

  assert.strictEqual(firstRestaurantTitle, favoritedRestaurantTitle);
};

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('Your Favorite Restaurants', '.content__heading');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('favorite one restaurant', async ({ I }) => {
  I.see('Your Favorite Restaurants', '.content__heading');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  await favoriteOneRestaurant({ I });
});

Scenario('unfavorite restaurant on the favorite list', async ({ I }) => {
  I.see('Your Favorite Restaurants', '.content__heading');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');

  await favoriteOneRestaurant({ I });

  I.amOnPage('/#/favorite');
  I.click(locate('.restaurant__list__title a').first());

  I.seeElement('#favoriteButton');
  const favoriteButtonLabel = await I.grabAttributeFrom('#favoriteButton', 'aria-label');

  assert.strictEqual(favoriteButtonLabel, 'unfavorite this restaurant');

  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');

  I.see('Your Favorite Restaurants', '.content__heading');
  I.see('Tidak ada restoran untuk ditampilkan', '.restaurant-item__not__found');
});
