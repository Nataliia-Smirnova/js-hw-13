import markup from '../photo-item-template.hbs';

import refs from './refs';

function updateMarkup(photos) {
  const newMarkup = markup(photos);
  refs.gallery.insertAdjacentHTML('beforeend', newMarkup);
}

export default updateMarkup;
