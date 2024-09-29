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
      console.log("sign out");
      store.user = null;
    }
  });
});
</script>

<template>
  user id : {{ store?.user?.uid }}
  <Navbar />

  <!-- Displays the active route component -->
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
  max-width: 1280px;
  text-align: center;
}

img {
  display: block;
}

button,
input {
  border-radius: 4px;
  border: 2px solid transparent;
  padding: 0.2rem 1rem;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;

  cursor: pointer;
  transition: border-color 0.25s;
  min-width: 100px;
  min-height: 40px;
}
input {
  background-color: #fff;
  color: #1d1d1d;
}
button {
  background-color: #b3e2a7;
  color: #1d1d1d;
}
button:hover {
  border-color: #6dc5d1;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
