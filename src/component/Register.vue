<template>
  <div class="flex-center flex-v-center w-100">
    <form class="form">
      <h2>Register</h2>
      <div class="flex-column">
        <input v-model="email" placeholder="Email" />
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="register">Register</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebase.client";
import { ref } from "vue";

const email = ref("e@1.com");
const username = ref("user_1");
const password = ref("123123");

async function register() {
  try {
    console.log(email);
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    alert("Register successful!");
  } catch (error) {
    alert("Register failed: " + error.message);
  }
}
</script>

<style></style>
