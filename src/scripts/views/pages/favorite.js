import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading" tabindex="0">Your Favorite Restaurants</h2>
          <div id="restaurants" class="restaurants">            
          </div>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurants');
    let restaurantItemIndex = 1;
    restaurants.forEach((restarurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restarurant, restaurantItemIndex);
      restaurantItemIndex++;
    });
  },
};

export default FavoritePage;
