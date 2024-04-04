<template>
  <div class="home">
    <div class="header">
      <h1>Vue Movies</h1>
      <div class="links">
        <a class="link" href="#">Главная</a> <a class="link" href="">О сайте</a>
      </div>
    </div>
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
          <img
            class="poster"
            :src="movie.posterUrlPreview"
            :alt="movie.nameRu"
          />
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
.header {
  position: fixed;
  display: flex;
  background-color: white;
  width: 100%;
  top: 0;
  left: 0;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  background-color: #f1f1f1;
  align-items: center;
}
.movies {
  margin-top: 160px;
}
.links {
  width: 20%;
  margin: 0 auto;
}

.link {
  margin-right: 16px;
  text-decoration: none;
  color: #808080;
  text-transform: uppercase;
}
.link:hover {
  color: #4b4b4b;
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
}

.movies-list {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 16px;
  list-style-type: none;
  margin: 0 auto;
  padding: 24px;
  margin: 24px 0px;
}

.movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding-bottom: 16px;
}
.movie:hover {
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transform: translateY(-0.25rem);
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  z-index: 2;
  background-color: white;
}

.titile {
  flex-wrap: nowrap;
}
.poster {
  width: 320px;
}
.date {
  color: #808080;
  margin-bottom: 4px;
}
</style>
