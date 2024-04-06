import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMoviesStore = defineStore("moviesStore", () => {
  const movies = ref([]);
  const favoriteMovies = ref([]);
  const totalPages = ref(0);
  const currentPage = ref(1);

  const isLoader = ref(false);

  const fetchMovies = async (pageNumber) => {
    isLoader.value = true;
    const res = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films",
      {
        params: {
          page: pageNumber,
        },
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    movies.value = await res.data.items.map((movie) => {
      return { ...movie, isFavorite: false };
    });
    totalPages.value = await res.data.totalPages;
    isLoader.value = false;
  };

  const addFavoriteMovie = (movieId) => {
    const movieIndex = movies.value.findIndex((movie) => {
      return movie.kinopoiskId === movieId;
    });
    movies.value[movieIndex].isFavorite = true;
  };

  const setCurreentPage = (page) => {
    currentPage.value = page;
  };

  return {
    movies,
    totalPages,
    currentPage,
    isLoader,
    addFavoriteMovie,
    fetchMovies,
    setCurreentPage,
  };
});
