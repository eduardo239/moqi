import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGameStore = defineStore("game", () => {
  const page = ref(1);

  return { page };
});
