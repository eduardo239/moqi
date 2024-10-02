<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-100 flex-col"
  >
    <form
      @submit.prevent="login()"
      class="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
    >
      <h2 class="text-2xl font-bold text-center text-gray-800">Sign In</h2>

      <!-- Email Field -->
      <div>
        <label class="block text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          class="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your Email"
        />
      </div>

      <!-- Password Field -->
      <div>
        <label class="block text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          class="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Your Password"
        />
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition duration-300"
      >
        Sign Up
      </button>
    </form>
    <div class="text-center mt-4">
      <router-link to="/register" class="text-green-600 hover:text-green-800"
        >Don't have an account?</router-link
      >
    </div>
  </div>
</template>

<script setup>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../plugins/firebase.client"; // Import your Firebase config
import { ref } from "vue";

const email = ref("e@1.com");
const password = ref("123123");

const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    alert("Login successful!");
  } catch (error) {
    alert("Login failed: " + error.message);
  }
};
</script>
