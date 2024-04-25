<template>
  <div class="movies">
    <ul class="movies-list">
      <MovieItem
        v-for="movie in movies"
        :key="movie.kinopoiskId"
        :movie="movie"
      />
    </ul>
  </div>
</template>

<script setup>
import MovieItem from "./MovieItem.vue";

defineProps({
  movies: Array,
});
</script>

<style scoped>
.movies {
  margin-top: 160px;
}

.movies-list {
  margin-top: 160px;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
  list-style-type: none;
  margin: 0 auto;
  padding: 24px;
  margin: 24px 0px;
}
</style>
