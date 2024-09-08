<script setup lang="ts">
import SideBarItem from "../SideBarItem/SideBarItem.vue";

defineProps({
  isOpenSidebar: {
    type: Boolean,
    required: true,
  },
});

</script>

<template>
  <aside class="aside" :class="{ 'open' : this.isOpenSidebar }">
    <img src="" alt="" class="aside__back" />
    <div class="aside__request">
      <div class="aside__title"> recent requests:</div>
      <div class="aside__container">
        <SideBarItem />
      </div>
    </div>
    <div class="aside__saved">
      <div class="aside__title"> saved:</div>
      <div class="aside__container">
        <SideBarItem />
      </div>
    </div>
  </aside>
</template>

<style>
@import "./sidebar.scss";
</style>
