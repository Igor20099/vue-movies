<template>
  <div class="loader">
    <span>Идет загрузка...</span>
  </div>
</template>

<script setup>
defineProps({
  isloader: Boolean,
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
}
</style>
