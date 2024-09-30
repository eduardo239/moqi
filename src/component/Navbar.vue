<template>
  <div class="flex flex-center">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/login">Login</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </div>
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

<style scoped>
ul {
  display: flex;
  align-items: center;
  gap: 14px;
  list-style: none;
  padding: 0;
}
ul li a {
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

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #b3e2a7;
  color: #1d1d1d;
}
</style>
