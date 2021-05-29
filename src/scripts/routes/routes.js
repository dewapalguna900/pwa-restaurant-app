import HomePage from '../views/pages/home';
import FavoritePage from '../views/pages/favorite';
import DetailPage from '../views/pages/detail';

const routes = {
  '/': HomePage, // default page
  '/favorite': FavoritePage,
  '/detail/:id': DetailPage,
};

export default routes;
