<template>
  <div class="home">
    <div class="movies">
      <div v-if="moviesStore.isLoader" class="loader">
        <span>Идет загрузка...</span>
      </div>
      <ul class="movies-list" v-else>
        <li
          @click="console.log(moviesStore.totalPages)"
          class="movie"
          v-for="movie in moviesStore.movies"
          :key="movie.kinopoiskId"
        >
          <h3 class="title" v-if="movie.nameRu">{{ movie.nameRu }}</h3>
          <span class="date">Год выпуска: {{ movie.year }}</span>
          <img
            v-if="!movie.isFavorite"
            @click.stop="movie.isFavorite = true"
            class="favorite"
            src="../assets/favorite-1.png"
          />
          <img
            v-if="movie.isFavorite"
            @click.stop="movie.isFavorite = false"
            class="favorite"
            src="../assets/favorite-2.png"
          />
          <img
            class="poster"
            :src="movie.posterUrlPreview"
            :alt="movie.nameRu"
          />
        </li>
      </ul>
    </div>
    <div class="pages">
      <div
        v-for="page in moviesStore.totalPages"
        @click="changePage(page)"
        :key="page"
        class="page"
        :class="{
          'current-page': page === pageNumber,
        }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMoviesStore } from "../stores/moviesStore";

const moviesStore = useMoviesStore();
const pageNumber = ref(1);

onMounted(() => {
  moviesStore.fetchMovies(pageNumber.value);
});

const changePage = (page) => {
  if (pageNumber.value === page) return;
  pageNumber.value = page;
  moviesStore.fetchMovies(pageNumber.value);
  window.scrollTo(0, 0);
};
</script>

<style>
.movies {
  margin-top: 160px;
}

.loader {
  display: flex;
  justify-content: center;
}

.pages {
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
}

.page {
  margin-right: 16px;
  font-size: 24px;
  cursor: pointer;
  color: #808080;
}

.current-page {
  color: black;
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
  position: relative;
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

.favorite {
  position: absolute;
  width: 32px;
  top: 10px;
  right: 10px;
}
</style>
