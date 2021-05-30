import UrlParser from '../../routes/url-parser';
import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import PreloaderInitiator from '../../utils/preloader-initiator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailPage = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="favoriteButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');
    let restaurant;
    try {
      PreloaderInitiator.preloaderOn(restaurantContainer);
      restaurant = await DicodingRestaurantDB.detailRestaurant(url.id);
    } finally {
      PreloaderInitiator.preloaderOff(restaurantContainer);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

      // const favoriteButtonContainer = document.querySelector('#favoriteButtonContainer');
      // favoriteButtonContainer.innerHTML = createFavoriteButtonTemplate();

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });
    }
  },
};

export default DetailPage;
