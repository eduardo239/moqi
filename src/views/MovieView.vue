<template>
  <div class="list">
    <ul class="flex">
      <li v-for="(game, index) in games" :key="index">
        <router-link :to="`/movie/${game.id}`">
          <img class="card" :src="game.background_image" alt="" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Movie from "../component/Game.vue";
import axios from "axios";

const games = ref([]);

async function getGames() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_RAWG_API_KEY}`
    );
    games.value = response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
}

watchEffect(async () => {
  getGames();
});
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

.card {
  width: 190px;
  overflow-x: hidden;
}
</style>
