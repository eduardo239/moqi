<template>
  <div>movie list</div>

  <div class="list">
    <Movie />
    <Movie />
    <Movie />
    <Movie />
  </div>
</template>

<script setup>
import Movie from "../component/Movie.vue";
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  padding: 14px;
  border-radius: 10px;
  background-color: #1d1d1d;
}
</style>
