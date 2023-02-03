const KEY = 'eb611ceade777fa79974e7594715897c';
// ---------------------------------------------------
// Значение для поика фильмов.

const QUERY = 'terminator';
// ---------------------------------------------------

const POSTER_PATH = 'https://image.tmdb.org/t/p/w500';

let dataArrey;

const filmCardList = document.querySelector('.hero__list');
// console.log(filmCardList);

const fetchCard = async (name, page = 1) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${QUERY}&page=1&include_adult=false`
  );
  const data = await response.json();
  // console.log(data.results);

  return data;
};

fetchCard()
  .then(data => {
    dataArrey = data.results;
    // console.log(dataArrey);
    createFilmCardMarkap(dataArrey);
  })
  .catch(error => {
    console.log(error);
  });

function createFilmCardMarkap(dataArrey) {
  const markap = dataArrey
    .map(
      ({
        title,
        id,
        release_date,
        genre_ids,
        poster_path,
        vote_average,
      }) => `<li class="film-card" data-action="${id}">
        <div class="film-card__img-thumb">
          <a class="film-card__link" href="#"
            ><img
              class="film-card__img"
              src="${POSTER_PATH}${poster_path}"
              alt="movie poster"
          /></a>
        </div>
        <h2 class="film-card__title">${title}</h2>
        <div class="film-card__thumb-info">
          <p class="film-card__genre">${genre_ids}</p>
          <p class="film-card__line">|</p>
          <p class="film-card__year">${release_date}</p>
          
        </div>
      </li>`
    )
    .join('');
  filmCardList.insertAdjacentHTML('beforeend', markap);
}
