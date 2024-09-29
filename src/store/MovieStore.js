import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useMovieStore = defineStore("movie", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return { count };
});
