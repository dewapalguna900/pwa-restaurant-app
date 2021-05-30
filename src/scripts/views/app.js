import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

function handleHeroSection(destination) {
  const heroSection = document.querySelector('.hero');
  if (destination === '/detail/:id') {
    heroSection.style.display = 'none';
  } else {
    heroSection.style.display = 'flex';
  }
}

class App {
  constructor({
    button, drawer, content, navItems,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._navItems = navItems;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      navItems: this._navItems,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    handleHeroSection(url);
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
