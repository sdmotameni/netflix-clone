const LANG = "en-US";
const REGION = "US";
// No need for env variable b/c this is a read only key
const TMDB_API_KEY = "2719ec201546f34cb412e7155382c37c";

const requests = {
  fetchTrendingMovies: `/trending/movies/week?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${TMDB_API_KEY}&language=${LANG}`,
  fetchTopRated: `/movie/top_rated?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&region=${REGION}`,
  fetchActionMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=28&sort_by=popularity.desc&language=${LANG}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${TMDB_API_KEY}&with_networks=213&sort_by=popularity.desc&language=${LANG}`,
  fetchAdventureMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=12&sort_by=popularity.desc&language=${LANG}`,
  fetchComedyMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=35&sort_by=popularity.desc&language=${LANG}`,
  fetchHorrorMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=27&sort_by=popularity.desc&language=${LANG}`,
  fetchRomanceMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10749&sort_by=popularity.desc&language=${LANG}`,
  fetchWarMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10752&sort_by=popularity.desc&language=${LANG}`,
  fetchAnimationMovies: `/discover/movie?api_key=${TMDB_API_KEY}&with_genres=16&sort_by=popularity.desc&language=${LANG}`,
};

const otherRequests = {
  // genre endpoint
  fetchGenres: `/genre/movie/list?api_key=${TMDB_API_KEY}&language=${LANG}`,
  // series endpoint
  discoverSeries: `/discover/tv?api_key=${TMDB_API_KEY}&sort_by=popularity.desc&language=${LANG}`,
};

export { requests, otherRequests };
