<script setup lang="ts">
import SelectThemeItem from "../SelectThemeItem/SelectThemeItem.vue";
</script>

<template>
  <div class="select-theme">
    <div class="select-theme__wrapper">
      <div class="select-theme__title">choose your theme:</div>
      <div class="select-theme__select">
        <SelectThemeItem
          title="Health"
          subTitle="Fitness, sports, and nutrition"
          url="/pictures/icons/themeIcons/health_icon.svg"
        />
        <SelectThemeItem
          title="Leisure"
          subTitle="Active recreation and excursions "
          url="/pictures/icons/themeIcons/leisure_icon.svg"
        />
        <SelectThemeItem
          title="Study"
          subTitle="Language courses, development"
          url="/pictures/icons/themeIcons/study_icon.svg"
        />
        <SelectThemeItem
          title="Cooking"
          subTitle="Dishes and recipes"
          url="/pictures/icons/themeIcons/cooking_icon.svg"
        />
        <SelectThemeItem
          title="Bonds"
          subTitle="With people, friends, lovers"
          url="/pictures/icons/themeIcons/bond_icon.svg"
        />
        <SelectThemeItem
          title="Fun "
          subTitle="Music, games, films, jokes, comedy "
          url="/pictures/icons/themeIcons/fun_icon.svg"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import "./SelectTheme.scss";
</style>
