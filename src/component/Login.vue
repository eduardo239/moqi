<!-- src/components/Login.vue -->
<template>
  <div class="flex-center flex-v-center w-100">
    <form class="form">
      <h2>Login</h2>
      <div class="flex-column">
        <input v-model="email" placeholder="Email" />
        <input v-model="password" type="password" placeholder="Password" />
        <button @click="login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebase.client"; // Import your Firebase config

export default {
  data() {
    return {
      email: "e@1.com",
      password: "123123",
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        alert("Login successful!");
      } catch (error) {
        alert("Login failed: " + error.message);
      }
    },
  },
};
</script>
