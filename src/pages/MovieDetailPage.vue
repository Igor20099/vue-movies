<template>
  <div v-if="movieStore.isLoader" class="loader">
    <span>Идет загрузка...</span>
  </div>
  <div class="movie-detail" v-else>
    <router-link to="/" class="back"
      ><img class="back-image" src="/back.png" />назад</router-link
    >
    <h1>{{ movieStore.movie.nameRu }}</h1>
    <span>Год выпуска : {{ movieStore.movie.year }}</span>
    <img :src="movieStore.movie.posterUrl" class="poster" />
    <p class="description">{{ movieStore.movie.description }}</p>
    <img
      v-if="!movieStore.movie.isFavorite"
      @click.stop="movie.isFavorite = true"
      class="favorite"
      src="../assets/favorite-1.png"
    />
    <img
      v-if="movieStore.movie.isFavorite"
      @click.stop="movie.isFavorite = false"
      class="favorite"
      src="../assets/favorite-2.png"
    />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useMovieStore } from "../stores/movieStore";
import { useRoute } from "vue-router";

const movieStore = useMovieStore();
const route = useRoute();

onMounted(() => {
  movieStore.fetchMovie(route.params.id);
});
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
