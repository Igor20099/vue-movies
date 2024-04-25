<template>
  <div class="home">
    <Loader v-if="moviesStore.isloader" />
    <MoviesList v-else :movies="moviesStore.movies" />
    <Paginator
      :pageNumber="pageNumber"
      :changePage="changePage"
      :totalPages="moviesStore.totalPages"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useMoviesStore } from "../stores/moviesStore";
import Loader from "../components/Loader.vue";
import MoviesList from "../components/MoviesList.vue";
import Paginator from "../components/Paginator.vue";

const moviesStore = useMoviesStore();
const pageNumber = ref(1);

onMounted(async () => {
  pageNumber.value = moviesStore.currentPage;
  await moviesStore.fetchMovies(pageNumber.value);
});

const changePage = async (page) => {
  if (pageNumber.value === page) return;
  pageNumber.value = page;
  await moviesStore.fetchMovies(pageNumber.value);
  moviesStore.setCurreentPage(page);
  window.scrollTo(0, 0);
};
</script>
