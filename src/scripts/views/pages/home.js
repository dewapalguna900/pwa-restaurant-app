import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import PreloaderInitiator from '../../utils/preloader-initiator';

const HomePage = {
  async render() {
    return `
          <div class="content">
            <h2 class="content__heading" tabindex="0">Best Restaurants</h2>
            <div id="restaurants" class="restaurants">            
            </div>
          </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    let restaurants;
    try {
      PreloaderInitiator.preloaderOn(restaurantsContainer);
      restaurants = await DicodingRestaurantDB.homeCatalogue();
    } finally {
      PreloaderInitiator.preloaderOff(restaurantsContainer);
      let restaurantItemIndex = 1;
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant, restaurantItemIndex);
        restaurantItemIndex++;
      });
    }
  },
};

export default HomePage;
