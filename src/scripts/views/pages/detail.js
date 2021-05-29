import UrlParser from '../../routes/url-parser';
import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantDB.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default DetailPage;
