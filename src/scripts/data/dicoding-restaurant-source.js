import API_ENDPOINT from '../globals/api-endpoint';

class DicodingRestaurantDB {
  static async homeCatalogue() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default DicodingRestaurantDB;
