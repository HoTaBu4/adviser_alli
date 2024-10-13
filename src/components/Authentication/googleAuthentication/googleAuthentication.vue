<script setup lang="ts">
import { onMounted } from 'vue';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';

const { language } = useLanguage();

// // Load Google SDK and handle login
// const loginWithGoogle = () => {
//   google.accounts.id.initialize({
//     client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
//     callback: handleCredentialResponse,
//   });

//   google.accounts.id.prompt(); // Displays the Google One Tap prompt
// };

// // Google callback
// const handleCredentialResponse = (response) => {
//   const idToken = response.credential;
//   // Send this idToken to your backend to verify and authenticate
//   console.log('Google ID Token:', idToken);
// };

// onMounted(() => {
//   const script = document.createElement('script');
//   script.src = 'https://accounts.google.com/gsi/client';
//   script.async = true;
//   script.defer = true;
//   document.body.appendChild(script);
// });
</script>

<template>
  <div class="social-networks">
    <button class="social-networks__google" @click="loginWithGoogle">
      <img src="/pictures/icons/google__icon.svg" alt="Google icon" />
      {{
        language === Languages.uk
          ? "Register with Google"
          : "зареєструватися з Google"
      }}
    </button>
  </div>
</template>

<style>
@import './googleAuthentication.scss';
</style>