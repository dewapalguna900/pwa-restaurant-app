import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';

import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  navItems: document.querySelectorAll('#navigationDrawer ul li'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
