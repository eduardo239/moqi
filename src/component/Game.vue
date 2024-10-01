<template>
  <div v-if="game" style="background-image: url(background_image_additional)">
    <section>
      <div class="grid-2">
        <img class="poster" :src="game?.background_image" :alt="game?.name" />
        <div>
          <p class="opacity-6">{{ game.released.split("-")[0] }}</p>
          <h1>{{ game.name }}</h1>
          <code class="flex flex-v-center">
            {{ game.platforms.map((p) => p.platform.name).join(", ") }}
          </code>
          <p>
            Rating: <span class="metacritic">{{ game.metacritic }}</span>
          </p>
        </div>
      </div>
      <hr />
      <div class="buttons">
        <button>Add to Collection</button>
        <button>Add to Played</button>
        |
        <button>+</button>
        <button>-</button>
      </div>
      <hr />
      <div>
        <h3>Trailer and Screenshots</h3>
        <div class="grid-2">
          <div v-if="loadingTrailer">
            <div>Loading...</div>
          </div>

          <iframe
            v-else-if="trailer"
            width="560"
            height="315"
            :src="trailer"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div v-if="loadingScreenshots">
            <div>Loading...</div>
          </div>
          <div v-else-if="screenshots">
            <ul class="flex">
              <li v-for="(screenshot, index) in screenshots" :key="index">
                <img
                  class="screenshot"
                  :src="screenshot.image"
                  :alt="screenshot.image"
                />
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <h3>Genre</h3>
        <p>{{ game?.genres.map((g) => g.name).join(", ") }}</p>
        <h3>Developer</h3>
        <p>{{ game?.developers.map((d) => d.name).join(", ") }}</p>
        <h3>Publisher</h3>
        <p>{{ game?.publishers.map((p) => p.name).join(", ") }}</p>
        <h3>Release Date</h3>
        <p>{{ game?.released }}</p>
      </div>
    </section>
  </div>
  <div v-else-if="loadingInfo">
    <div>Loading...</div>
  </div>
  <div v-else>No game found</div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const game = ref(null);
const trailer = ref(null);
const screenshots = ref(null);
const loadingInfo = ref(false);
const loadingTrailer = ref(false);
const loadingScreenshots = ref(false);

const id = route.params.id;

async function getGame() {
  try {
    loadingInfo.value = true;
    const response = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    );
    game.value = response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
  } finally {
    loadingInfo.value = false;
  }
}
async function getGameTrailer() {
  try {
    loadingTrailer.value = true;
    const tResponse = await axios.get(
      `https://api.rawg.io/api/games/${id}/movies?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    );
    const trailerResponse = tResponse.data.results;
    if (trailerResponse.length > 0) {
      trailer.value = trailerResponse[0].data[480];
    }
  } catch (error) {
    console.error("Error fetching games:", error);
  } finally {
    loadingTrailer.value = false;
  }
}
async function getGameScreenshots() {
  try {
    loadingScreenshots.value = true;
    const sResponse = await axios.get(
      `https://api.rawg.io/api/games/${id}/screenshots?key=${
        import.meta.env.VITE_RAWG_API_KEY
      }`
    );
    const screenshotsResponse = sResponse.data.results;
    if (screenshotsResponse.length > 0) {
      screenshots.value = screenshotsResponse;
    }
  } catch (error) {
    console.error("Error fetching games:", error);
  } finally {
    loadingScreenshots.value = false;
  }
}
watchEffect(async () => {
  await getGame();
  await getGameTrailer();
  await getGameScreenshots();
});
</script>

<style scoped>
h1 {
  margin: 0;
  font-size: 3rem;
}
p {
  margin: 0;
}

.metacritic {
  background-color: #7f7;
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: 700;
  color: #1d1d1d;
  font-size: 0.8rem;
}

/*  */
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

.buttons {
  display: flex;
  align-items: center;
  gap: 14px;
}
</style>
