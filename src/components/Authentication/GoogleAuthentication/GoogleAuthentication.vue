<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { client } from '../../../api/fetchClient';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';
import { jwtDecode } from 'jwt-decode';
import { useStore } from 'vuex';

const { language } = useLanguage();
const url = ref('');
const urlNew = new URL(window.location.href);
const code = urlNew.searchParams.get('code');
const store = useStore();
const isGoogleLogin = ref(false);


// if (code) {
//   client.get(`/auth/google/?code=${code}`)
//     .then((data) => {

//       document.cookie = `token=${data.access_token}; path=/; max-age=3600; SameSite=Strict; Secure`;
//       const userData= jwtDecode(data.access_token);
//       store.commit('user/setUser',{email: userData.sub, id: userData.id})
//       isGoogleLogin.value = true
//     })
//     .catch((error) => {
//       console.error('Error during API request:', error);
//     });
// }

// onMounted(() => {
//   if (code) {
//     client.get(`/auth/google/?code=${code}`)
//       .then((data) => {
//         // Store the token in a cookie for later authentication
//         document.cookie = `token=${data.access_token}; path=/; max-age=3600; SameSite=Strict; Secure`;

//         // Decode user data and store in Vuex
//         const userData = jwtDecode(data.access_token);
//         store.commit('user/setUser', { email: userData.sub, id: userData.id });

//         // Redirect after successful login
//         window.location.replace('/');
//       })
//       .catch((error) => {
//         console.error('Error during API request:', error);
//       });
//   }
// });

// watch(isGoogleLogin, (newValue) => {
//   if (newValue) {
//     isGoogleLogin.value = false; // Reset it to avoid repeated redirection
//     window.location.replace('/'); // Redirect to the desired page
//   }
// });

const googleLogin = async () => {
  const response = await client.get<{ url: string }>('/google/login/');
  url.value = response.url;
  window.location.replace(url.value);
}
</script>

<template>
  <button class="authentication__google" @click="googleLogin">
    <img src="/pictures/icons/google__icon.svg" alt="Google Icon" />
    {{
      language === Languages.us
        ? "Register with Google"
        : "зареєструватися з Google"
    }}
  </button>
</template>

<style>
@import './googleAuthentication.scss';
</style>
