<template>
  <div class="pages">
    <div
      v-for="page in totalPages"
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
</template>

<script setup>
defineProps({
  pageNumber: Number,
  changePage: Function,
  totalPages: Number,
});
</script>

<style scoped>
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
</style>
