const PreloaderInitiator = {
  preloaderOn: (elementContainer) => {
    const preloaderElement = `
    <div id="preloader__wrapper">
        <img id="preloader__icon" src="images/preloader_spin.gif" alt="Preloader Icon" tabindex="0">
    </div>
    `;
    elementContainer.innerHTML = preloaderElement;
  },

  preloaderOff: (elementContainer) => {
    elementContainer.innerHTML = '';
  },
};

export default PreloaderInitiator;
