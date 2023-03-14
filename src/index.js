// index
import axios from 'axios';
import Notiflix from 'notiflix';

//Посилання на елементи
const formEl = document.querySelector('#search-form');
const inputEl = document.querySelector('[name="searchQuery"]');
const galleryEl = document.querySelector('.gallery');

//Викликаємо слухача
formEl.addEventListener('submit', onFormSubmit);

//Функція SUBMIT
function onFormSubmit(e) {
  e.preventDefault();
  getPosts();
}

// Функція запиту на сервер
async function getPosts() {
  const key = '34395621-a4ae5341feaa95111ecdda581';
  const search = inputEl.value;
  const imageType = 'photo';
  const orientation = 'horizontal';
  const safesearch = 'true';

  try {
    const response = await axios(
      `https://pixabay.com/api/?key=${key}&q=${search}&image_type=${imageType}&orientation=${orientation}&safesearch=${safesearch}`
    );
    if (response.data.hits === []) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
    console.log(response.data.hits);

    // return response.data.hits;
  } catch (error) {
  } finally {
    console.log('🧩');
  }
}
