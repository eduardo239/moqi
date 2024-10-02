<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { watchEffect } from "vue";
import { useUserStore } from "./store/UserStore";

import Navbar from "./component/Navbar.vue";

const store = useUserStore();

watchEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.user = user;
    } else {
      store.user = null;
    }
  });
});
</script>

<template>
  <Navbar />
  <div class="bg-gray-100 min-h-screen flex align-top justify-center">
    <div class="max-w-screen-lg w-full p-4 bg-white rounded-lg shadow-lg">
      <router-view></router-view>
    </div>
  </div>
</template>

<style></style>
