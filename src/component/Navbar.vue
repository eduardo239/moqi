<template>
  <nav class="bg-green-600 p-4 shadow-md">
    <ul class="flex justify-center space-x-4">
      <li>
        <router-link
          class="text-white hover:bg-green-700 py-2 px-4 rounded"
          to="/"
          >Home</router-link
        >
      </li>

      <li>
        <router-link
          class="text-white hover:bg-green-700 py-2 px-4 rounded"
          :to="userId ? '/profile/' + userId : '/login'"
        >
          {{ userId ? "Profile" : "Login" }}
        </router-link>
      </li>

      <li>
        <router-link
          class="text-white hover:bg-green-700 py-2 px-4 rounded"
          to="/logout"
          @click="logout()"
          >Logout</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import { ref, watchEffect } from "vue";
import { useUserStore } from "../store/UserStore";

const userId = ref(null);

const store = useUserStore();

watchEffect(() => {
  userId.value = store.user?.uid;
});

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

<style scoped></style>
