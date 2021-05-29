import DicodingRestaurantDB from '../../data/dicoding-restaurant-source';

const HomePage = {
  async render() {
    return `
        <h2>Home Page</h2>
      `;
  },

  async afterRender() {
    const restaurants = await DicodingRestaurantDB.homeCatalogue();
    console.log(restaurants);
  },
};

export default HomePage;
