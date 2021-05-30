import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate, errorPageTemplate } from '../templates/template-creator';
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
      PreloaderInitiator.preloaderOff(restaurantsContainer);
      let restaurantItemIndex = 1;
      restaurants.restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant, restaurantItemIndex);
        restaurantItemIndex++;
      });
    } catch (e) {
      restaurantsContainer.innerHTML = errorPageTemplate();
    }
  },
};

export default HomePage;
