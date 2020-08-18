const debounce = require('lodash.debounce');

import './styles.css';
import refs from './js/refs';
import photoService from './js/photo-service';

refs.form.addEventListener('submit', event => event.preventDefault());

refs.input.addEventListener(
  'input',
  debounce(event => {
    photoService.query = event.target.value;
    addClasList(refs.loadMoreBtn);
    refs.gallery.innerHTML = '';

    if (photoService.query === '') {
      return;
    } else {
      photoService.resetPage();

      photoService.fetchPhotos();
      removeClasList(refs.loadMoreBtn);
    }
  }, 500),
);

refs.loadMoreBtn.addEventListener('click', () => {
  photoService.fetchPhotos();
});

function removeClasList(elem) {
  elem.classList.remove('is-hidden');
}

function addClasList(elem) {
  elem.classList.add('is-hidden');
}
