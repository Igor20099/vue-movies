<template>
  <div class="home">
    <div class="movies">
      <ul class="movies-list">
        <li
          @click="$router.push(`/movies/${movie.kinopoiskId}`)"
          class="movie"
          v-for="movie in moviesStore.movies.filter(
            (movie) => movie.isFavorite
          )"
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
  </div>
</template>

<script setup>
import { useFavoriteMoviesStore } from "../stores/favoriteMoviesStore";
import { useMoviesStore } from "../stores/moviesStore";
const moviesStore = useMoviesStore();
const favoriteMoviesStore = useFavoriteMoviesStore();
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
