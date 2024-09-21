<script setup lang="ts">
import { useStore } from "vuex";
import { Languages } from "./store/types/LanguageType";

const browserNavigator = navigator;

const store = useStore();

if (
  browserNavigator.language === Languages.uk ||
  browserNavigator.language === Languages.us
) {
  store.dispatch("language/updateLanguage", browserNavigator.language);
} else {
  store.dispatch("language/updateLanguage");
}
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
