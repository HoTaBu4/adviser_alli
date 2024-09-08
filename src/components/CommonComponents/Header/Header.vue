<script lang="ts" setup>
import Burger from "./Burger/Burger.vue";

defineProps({
  home: {
    type: Boolean,
  },
});
const user = false;
</script>

<template>
  <header class="header">
    <div class="header__icon">
      <img
        src="/pictures/icons/main__logo_phone.png"
        alt="logo"
        class="header__icon--phone"
      />
      <img
        src="/pictures/icons/main__logo__tablet.png"
        alt="logo"
        class="header__icon--tablet"
      />
      <div class="header__icon-text">Elli.ai</div>
    </div>
    <div class="header__info" v-if="!home">
      <div class="header__info--text">FRESH</div>
      <div class="header__info--line"></div>
      <div class="header__info--text">CONVINIENT</div>
      <div class="header__info--line"></div>
      <div class="header__info--text">FAST</div>
    </div>
    <div class="header__right-side">
      <button class="header__log-in" v-if="user"></button>
      <Burger v-if="user" />
    </div>
  </header>
</template>

<style>
@import "./headerStyle.scss";
</style>
