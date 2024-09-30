<template>
  <div class="flex flex-center">
    <div class="pagination">
      <button @click="updatePage(page - 1)" :disabled="page === 1">
        Previous
      </button>
      <button @click="changePage(page)">{{ page }}</button>

      <button @click="updatePage(page + 1)">Next</button>
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

<style scoped>
.pagination {
  margin: 1rem 0;
  display: flex;
  gap: 14px;
}
</style>
