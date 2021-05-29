import UrlParser from '../../routes/url-parser';
import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';

const DetailPage = {
  async render() {
    return `
          <h2>Detail Page</h2>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DicodingRestaurantDB.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default DetailPage;
