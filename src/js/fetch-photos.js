// https: //pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
import updateMarkup from './update-markup';
const key = '17889682-7384d09bbfdcaf741bb48a713';

function fetchPhotos(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;

  fetch(url)
    .then(res => res.json())
    .then(data => updateMarkup(data.hits));
}

export default fetchPhotos;
