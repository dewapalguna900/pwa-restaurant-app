import UrlParser from '../../routes/url-parser';
import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate, createLikeButtonTemplate } from '../templates/template-creator';
import PreloaderInitiator from '../../utils/preloader-initiator';

const DetailPage = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
            <div id="likeButtonContainer"></div>
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

      const likeButtonContainer = document.querySelector('#likeButtonContainer');
      likeButtonContainer.innerHTML = createLikeButtonTemplate();
    }
  },
};

export default DetailPage;
