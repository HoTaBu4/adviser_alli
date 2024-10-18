<script lang="ts" setup>
import { useStore } from "vuex";
import Header from "../CommonComponents/Header/Header.vue";
import { client } from "../../api/fetchClient";

const store = useStore();

const user = store.user;
console.log(client.get('/user/me').then((data) => console.log(data)))
</script>

<template>
  <Header />
  <main class="main">
    <div class="main__container">
      <div class="main__image">
        <img src="/pictures/images/main_girl.png" alt="" class="main__image" />
      </div>
      <RouterView />
    </div>
  </main>
</template>

<style>
@import "./MainStyle.scss";
</style>
