<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { client } from '../../api/fetchClient';
import { useStore } from 'vuex';
import { jwtDecode } from 'jwt-decode';
import Header from '../CommonComponents/Header/Header.vue';

const urlNew = new URL(window.location.href);
const code = urlNew.searchParams.get('code');
const store = useStore();
const isGoogleLogin = ref(false);

onMounted(() => {
  if (code) {
    client.get(`/auth/google/?code=${code}`)
      .then((data) => {
        // Store the token in a cookie for later authentication
        document.cookie = `token=${data.access_token}; path=/; max-age=3600; SameSite=Strict; Secure`;

        // Decode user data and store in Vuex
        const userData = jwtDecode(data.access_token);
        store.commit('user/setUser', { email: userData.sub, id: userData.id });

        // Redirect after successful login
        window.location.replace('/adviser_alli/home');
      })
      .catch((error) => {
        console.error('Error during API request:', error);
      });
  }
});

watch(isGoogleLogin, (newValue) => {
  if (newValue) {
    isGoogleLogin.value = false; // Reset it to avoid repeated redirection
    window.location.replace('/'); // Redirect to the desired page
  }
});

</script>

<template>
  <Header />
  <main class="main">
    <div>
      Loading............
    </div>
  </main>
</template>

<style>
</style>