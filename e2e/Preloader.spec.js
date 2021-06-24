Feature('Preloader');

Scenario('Preloader activated on homepage', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('#preloader__wrapper');

  I.seeElement('.restaurant-item');

  I.dontSeeElement('#preloader__wrapper');
});

Scenario('Preloader activated on detail page', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant__list__title a');

  I.click(locate('.restaurant__list__title a').first());

  I.seeElement('#preloader__wrapper');

  I.seeElement('.restaurant__title');

  I.dontSeeElement('#preloader__wrapper');
});
