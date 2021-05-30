import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
    const restaurants = await DicodingRestaurantDB.homeCatalogue();
    const restaurantsContainer = document.querySelector('#restaurants');
    let restaurantItemIndex = 1;
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant, restaurantItemIndex);
      restaurantItemIndex++;
    });
  },
};

export default HomePage;
