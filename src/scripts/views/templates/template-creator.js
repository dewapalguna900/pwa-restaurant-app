import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_MEDIUM + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
  <h3>Information</h3>
    <h4>Categories</h4>
    <p>${restaurant.categories[0].name}</p>
    <h4>Address</h4>
    <p>${restaurant.address}, ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="restaurant__overview">
    <h3>Overview</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">    
    <div class="restaurant-item__header">
        <p class="restaurant__city__label" tabindex="0" aria-label="Restaurant Location is at ${restaurant.city}">${restaurant.city}</p>
        <img class="restaurant-item__header__poster" alt="${restaurant.name}"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId : 'https://i.picsum.photos/id/1060/5598/3732.jpg?hmac=31kU0jp5ejnPTdEt-8tAXU5sE-buU-y1W1qk_BsiUC8'}">       
    </div>
    <div class="restaurant-item__content">
      <div class="restaurant-item__header__rating">
          <p>⭐️  <span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.description}</p>
    </div>
  </div>
  `;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate };
