<script setup>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { watchEffect } from "vue";
import { useUserStore } from "./store/UserStore";

import Navbar from "./component/Navbar.vue";

const store = useUserStore();

// to remove
watchEffect(() => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      store.user = user;
    } else {
      console.log("sign out");
      store.user = null;
    }
  });
});
</script>

<template>
  <Navbar />

  <router-view></router-view>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: #2f2f2f;
}

img {
  display: block;
}

button {
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 0.2rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  background-color: #b3e2a7;
  color: #1d1d1d;
  cursor: pointer;
  transition: border-color 0.25s;
  min-width: 100px;
  min-height: 40px;
}
button:hover {
  border-color: #6dc5d1;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
</style>
