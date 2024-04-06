import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoriteMoviesStore = defineStore("favoriteMoviesStore", () => {
  const favoriteMovies = ref([]);

  const addFavoriteMovie = (movie) => {
    movie.isFavorite = true;
    favoriteMovies.value.push(movie);
  };

  return {
    favoriteMovies,
    addFavoriteMovie,
  };
});
