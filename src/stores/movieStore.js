import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useMovieStore = defineStore("movieStore", () => {
  const movie = ref({});
  const isLoader = ref(false);

  const fetchMovie = async (id) => {
    isLoader.value = true;
    const res = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`,
      {
        headers: {
          "X-API-KEY": import.meta.env.VITE_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    movie.value = { ...res.data, isFavorite: false };
    isLoader.value = false;
  };

  return {
    movie,
    isLoader,
    fetchMovie,
  };
});
