const API_KEY = "d19a1946970f98fae002af7545322879";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const GENRES_LIST_HTTP = "https://api.themoviedb.org/3/genre/movie/list";
const MOVIE_GENRES_HTTP = "https://api.themoviedb.org/3/discover/movie";

const genresListURL = `${GENRES_LIST_HTTP}?api_key=${API_KEY}`;
const movieGenresURL = `${MOVIE_GENRES_HTTP}?api_key=${API_KEY}`;
