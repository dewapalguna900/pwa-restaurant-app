import UrlParser from '../../routes/url-parser';
import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate, errorPageTemplate } from '../templates/template-creator';
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

      PreloaderInitiator.preloaderOff(restaurantContainer);
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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
    } catch (e) {
      restaurantContainer.innerHTML = errorPageTemplate();
    }
  },
};

export default DetailPage;
