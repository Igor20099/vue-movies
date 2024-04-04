<template>
  <div>
    <h1>Vue Movies</h1>
    <hr />
    <div class="movies">
      <ul class="movies-list">
        <li
          @click="console.log(movie.nameRu)"
          class="movie"
          v-for="movie in moviesStore.movies"
          :key="movie.kinopoiskId"
        >
          <h3 class="title" v-if="movie.nameRu">{{ movie.nameRu }}</h3>
          <span class="date">Год выпуска: {{ movie.year }}</span>
          <img :src="movie.posterUrlPreview" :alt="movie.nameRu" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useMoviesStore } from "../stores/moviesStore";

const moviesStore = useMoviesStore();

onMounted(() => {
  moviesStore.fetchMovies();
});
</script>

<style>
.movies-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 8px;
  list-style-type: none;
  margin: 0 auto;
  padding: 0;
}

.movie {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 10px;
}
.movie:hover {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transform: translateY(-0.25rem);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.titile {
  flex-wrap: nowrap;
}
</style>
