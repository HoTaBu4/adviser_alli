<script setup lang="ts">
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';


const { language } = useLanguage();
</script>

<template>
<div class="social-neworks">
  <button class="social-neworks__facebook">
    <img src="/pictures/icons/facebook__icon.svg" alt="" />
    {{
      language === Languages.uk
        ? "Register with Facebook"
        : "зареєструватися з Facebook"
    }}
  </button>
  <button class="social-neworks__google">
    <img src="/pictures/icons/google__icon.svg" alt="" />
    {{
      language === Languages.uk
        ? "Register with Google"
        : "зареєструватися з Google"
    }}
  </button>
  <button class="social-neworks__iphone">
    <img src="/public/pictures/icons/apple__icon.svg" alt="" />
    {{
      language === Languages.uk
        ? "Register with Apple"
        : "зареєструватися з Apple"
    }}
  </button>
</div>
</template>

<style>
@import './SocialNetworks.scss';
</style>