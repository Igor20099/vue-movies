<template>
  <div class="header">
    <h1>Vue Movies</h1>
    <div class="links">
      <router-link class="link" to="/">Главная</router-link>
      <router-link class="link" to="/favorite">Избранное</router-link>
      <router-link class="link" to="/about">О сайте</router-link>
    </div>
  </div>
</template>

<script setup></script>

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

.links {
  width: 30%;
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
</style>
