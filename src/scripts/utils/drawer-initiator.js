const DrawerInitiator = {
  init({
    button, drawer, content, navItems,
  }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    button.addEventListener('keyup', (event) => {
      if (event.keyCode === 13) {
        this._toggleDrawer(event, drawer);
      }
    });

    navItems.forEach((navItem) => {
      navItem.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
