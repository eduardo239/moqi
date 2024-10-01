<template>
  <div class="list">
    <Pagination :page="page" @update:page="handlePageUpdate" />

    <div v-if="loading">Loading...</div>
    <div v-else-if="games.length === 0">No games found</div>

    <ul v-else class="flex flex-center">
      <li v-for="(game, index) in games" :key="index">
        <router-link :to="`/game/${game.id}`">
          <div class="card-container">
            <span>{{ game.name }}</span>
            <img class="poster" :src="game.background_image" alt="" />
          </div>
        </router-link>
      </li>
    </ul>
  </div>

  <Pagination :page="page" @update:page="handlePageUpdate" />
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import Pagination from "../component/Pagination.vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const games = ref([]);
const page = ref(1);
const loading = ref(false);
const route = useRoute();

const handlePageUpdate = (newPage) => {
  games.value = [];
  page.value = newPage;
  router.push(`?page=${page.value}`);
};

async function getGames() {
  const queryPage = route.query.page;
  if (queryPage) {
    page.value = parseInt(queryPage);
  }
  try {
    loading.value = true;
    const response = await axios.get(
      `https://api.rawg.io/api/games?page=${page.value}&key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    );
    games.value = response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
  } finally {
    loading.value = false;
  }
}

watchEffect(async () => {
  getGames();
});

watch(page, async (newPage, oldPage) => {
  getGames();
});
</script>

<style scoped>
.list {
  background: #121212;
  justify-content: center;
  gap: 14px;
  padding: 14px;
  border-radius: 10px;
}
.card-container {
  position: relative;
}
.card-container span {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -0);
  z-index: 100;
  background: rgb(241, 255, 215);
  min-width: 200px;
  text-align: center;
  margin: 7px;
  padding: 7px;
}

.pagination {
  margin: 1rem 0;
  display: flex;
  gap: 14px;
}
</style>
