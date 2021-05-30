import CONFIG from '../../globals/config';

function _getFoodListWithElement(data) {
  const foodsMenu = [];
  data.forEach((food) => {
    foodsMenu.push(`<li tabindex="0">${food.name}</li>`);
  });

  return foodsMenu.join('\n');
}

function _getDrinkListWithElement(data) {
  const drinksMenu = [];
  data.forEach((drink) => {
    drinksMenu.push(`<li tabindex="0">${drink.name}</li>`);
  });

  return drinksMenu.join('\n');
}

function _getAllReviewWithElement(data) {
  const listReview = [];
  let reviewIndex = 1;
  data.forEach((review) => {
    listReview.push(`
        <div class="review__wrapper" tabindex="0" aria-label="Review number ${reviewIndex}">
          <div class="review__header">
            <h4 tabindex="0">${review.name}</h4>
            <p tabindex="0">${review.date}</p>
          </div>
          <hr>
          <p tabindex="0">${review.review}</p>
        </div>
    `);
    reviewIndex++;
  });

  return listReview.join('\n');
}

const createRestaurantDetailTemplate = (restaurant) => {
  let strContent = `
    <h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
    <img class="restaurant__poster" tabindex="0" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
    <h3>Information</h3>
      <h4 tabindex="0">Categories</h4>
      <p tabindex="0">${restaurant.categories.map((ctg) => ctg.name).join(', ')}</p>
      <h4 tabindex="0">Address</h4>
      <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
      <h4 tabindex="0">Rating</h4>
      <p>⭐️  <span tabindex="0">${restaurant.rating}</span></p>
    </div>    
    <div tabindex="0" class="restaurant__overview">
      <h3>Overview</h3>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  `;

  const strFoodList = _getFoodListWithElement(restaurant.menus.foods);
  const strDrinkList = _getDrinkListWithElement(restaurant.menus.drinks);
  const strReviewList = _getAllReviewWithElement(restaurant.customerReviews);

  strContent += `
    <div class="restaurant__overview">
      <h3 tabindex="0">Menus:</h3>
      <div class="menus__wrapper">
        <div class="menu__list__section">
          <h4 tabindex="0">Food</h4>
          <ul>
            ${strFoodList}
          </ul>
        </div>
        <div class="menu__list__section ">
          <h4 tabindex="0">Drinks</h4>
          <ul>
          ${strDrinkList}
          </ul>
        </div>   
      </div>
    </div>
  `;

  strContent += `
    <div class="restaurant__overview">
      <h3 tabindex="0">Customer Review:</h3>
      <div class="review__list__wrapper">
      ${strReviewList}
      </div>
    </div>
  `;

  return strContent;
};

const createRestaurantItemTemplate = (restaurant, index) => `
  <div class="restaurant-item" tabindex="0" aria-label="Restaurant number ${index}">    
    <div class="restaurant-item__header">
        <p class="restaurant__city__label" tabindex="0" aria-label="Restaurant Location is at ${restaurant.city}">${restaurant.city}</p>
        <img class="restaurant-item__header__poster" alt="${restaurant.name}" tabindex="0"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8'}">       
    </div>
    <div class="restaurant-item__content">
      <div class="restaurant-item__header__rating" tabindex="0" aria-label="Restaurant Rating is ${restaurant.rating}">
          <p>⭐️  <span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p tabindex="0" aria-label="Restaurant description is ${restaurant.description}">${restaurant.description}</p>
    </div>
  </div>
  `;

const createFavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="favoriteButton" class="favorite">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
