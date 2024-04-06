import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMoviesStore = defineStore("moviesStore", () => {
  const movies = ref([]);
  const totalPages = ref(0);

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

  return {
    movies,
    totalPages,
    isLoader,
    fetchMovies,
  };
});
