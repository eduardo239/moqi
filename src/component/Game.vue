<template>
  <div class="grid-2">
    <div><img :src="game.background_image" :alt="game.name" /></div>
    <div class="card-info">
      <div class="title">
        <span>{{ game.name }}</span>
        <span>({{ game.released }})</span>
      </div>
      <p class="description">
        {{ removeHTMLTags(game.description) }}
      </p>
      <div class="buttons">
        <button>To Play</button>
        <button>Played</button>
      </div>
    </div>
    <p>{{ game.metacritic }}</p>
  </div>
  {{ game }}
</template>

<script setup>
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const game = ref(null);

const id = route.params.id;

function removeHTMLTags(str) {
  return str.replace(/<\/?[^>]+(>|$)/g, ""); // RegEx to match and remove HTML tags
}

async function getGame() {
  try {
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    );
    game.value = response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
  }
}

watchEffect(async () => {
  getGame();
});
</script>

<style scoped>
img {
  border-radius: 4px;
  height: 190px;
}
.card {
  display: flex;
  gap: 14px;
  padding: 14px;
  border-radius: 4px;
  background-color: #1d1d1d;
  width: 390px;
  height: 220px;
  border: 1px solid #7f7;
}

.card-info {
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 14px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title span {
  font-size: 1.25rem;
  font-weight: 700;
}
.description {
  overflow-y: scroll;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 0.4px;
  max-height: 100px;
  overflow-y: scroll;
}
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
</style>
