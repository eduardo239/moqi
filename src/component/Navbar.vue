<template>
  <ul>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/register">Register</router-link>
    |
    <button @click="logout">Logout</button>
  </ul>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();
async function logout() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}
</script>

<style></style>
