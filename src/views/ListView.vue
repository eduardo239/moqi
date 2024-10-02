<template>
  <Pagination :page="page" @update:page="handlePageUpdate" />

  <div class="bg-gray-100 flex items-center justify-center" v-if="loading">
    <p>Loading...</p>
  </div>
  <div
    class="bg-gray-100 flex items-center justify-center"
    v-else-if="games.length === 0"
  >
    <p>No games found</p>
  </div>

  <div class="bg-gray-100 flex items-center justify-center">
    <div
      class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 max-w-6xl"
    >
      <div v-for="(game, index) in games" :key="index">
        <router-link :to="`/game/${game.id}`">
          <div
            class="card-game"
            :style="{ backgroundImage: `url(${game.background_image})` }"
          >
            <p class="font-bold">{{ game.name }}</p>
          </div>
        </router-link>
      </div>
    </div>
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
.card-game {
  background-color: white;
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 120px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-size: cover;
}

.card-game p {
  backdrop-filter: blur(10px);
  padding: 0.25rem 0.5rem;
  background-color: #efefef;
}
</style>
