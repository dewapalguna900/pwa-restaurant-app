const FavoritePage = {
  async render() {
    return `
            <div class="content">
              <h2 class="content__heading">Your Favorite Restaurant</h2>
              <div id="restaurants" class="restaurants">

              </div>
            </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default FavoritePage;
