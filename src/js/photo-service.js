import updateMarkup from './update-markup';

const key = '17889682-7384d09bbfdcaf741bb48a713';

export default {
  page: 1,
  searchQuery: '',

  fetchPhotos() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;

    return fetch(url)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        console.log(this.page);
        updateMarkup(data.hits);

        window.scrollTo({
          top: document.documentElement.offsetHeight,
          behavior: 'smooth',
        });
      });
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};
