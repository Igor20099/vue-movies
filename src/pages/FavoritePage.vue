<template>
  <div class="home">
    <MoviesList
      :movies="moviesStore.favoriteMovies.filter((movie) => movie.isFavorite)"
    />
  </div>
</template>

<script setup>
import { useMoviesStore } from "../stores/moviesStore";
import MoviesList from "../components/MoviesList.vue";
const moviesStore = useMoviesStore();
console.log(moviesStore.favoriteMovies);
</script>

<style>
.movie-detail {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 120px;
  z-index: 1;
}
.back {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-size: 24px;
  position: fixed;
  top: 130px;
  left: 10px;
}

.description {
  width: 50%;
  text-align: center;
}
.back-image {
  width: 24px;
  margin-right: 4px;
}

.back:hover {
  color: #808080;
}

.loader {
  display: flex;
  justify-content: center;
}

.poster {
  width: 240px;
}
</style>
