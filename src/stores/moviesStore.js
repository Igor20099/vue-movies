import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMoviesStore = defineStore("moviesStore", () => {
  const movies = ref([]);

  const fetchMovies = async () => {
    const res = await axios.get(
      "https://kinopoiskapiunofficial.tech/api/v2.2/films",
      {
        params: {
          page: 3,
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
  };

  return {
    movies,
    fetchMovies,
    setFavorite,
  };
});
