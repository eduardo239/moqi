<template>
  <div class="flex flex-center">
    <div class="flex items-center justify-center w-full p-4 gap-4">
      <button
        class="px-4 py-2 bg-green-500 text-white rounded-lg"
        @click="updatePage(page - 1)"
        :disabled="page === 1"
      >
        Previous
      </button>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded-lg"
        @click="changePage(page)"
      >
        {{ page }}
      </button>

      <button
        class="px-4 py-2 bg-green-500 text-white rounded-lg"
        @click="updatePage(page + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from "vue";
const emit = defineEmits(["update:page"]);
const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const updatePage = (newPage) => {
  emit("update:page", newPage); // Emit the new page value to the parent
};
</script>

<style scoped></style>
