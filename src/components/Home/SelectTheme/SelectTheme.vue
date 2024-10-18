<script setup lang="ts">
import { useStore } from "vuex";
import SelectThemeItem from "../SelectThemeItem/SelectThemeItem.vue";
import { SelectedChatState } from "../../../store/modules/selectedChat";

const props = defineProps({
  isGuest: {
    type: Boolean,
    reqired: true,
  }
})
const emit = defineEmits(['selectTheme','setCloseSelectTheme'])
const store = useStore();

const themes = [
  { id: 1, name: 'Health', description: 'Fitness, sports, and nutrition' },
  { id: 2, name: 'Leisure', description: 'Active recreation and excursions' },
  { id: 3, name: 'Study', description: 'Language courses, development' },
  { id: 4, name: 'Cooking', description: 'Dishes and recipes' },
  { id: 5, name: 'Bonds', description: 'With people, friends, lovers' },
  { id: 6, name: 'Fun', description: 'Music, games, films, jokes, comedy' }
];

const handleClick = (theme: number) => {
  if (props.isGuest) {
    emit('selectTheme',theme, true );
  } else {
    store.commit('selectedChat/resetChatAndSavedMessage')
    emit('selectTheme',theme);
  }
  
  emit('setCloseSelectTheme', false);
}
</script>

<template>
  <div class="select-theme">
    <div class="select-theme__wrapper">
      <div class="select-theme__title">choose your theme:</div>
      <div class="select-theme__select">
        <SelectThemeItem
          title="Health"
          subTitle="Fitness, sports, and nutrition"
          url="pictures/icons/themeIcons/health_icon.svg"
          @click="handleClick(6)"
        />
        <SelectThemeItem
          title="Leisure"
          subTitle="Active recreation and excursions "
          url="pictures/icons/themeIcons/leisure_icon.svg"
          @click="handleClick(5)"
        />
        <SelectThemeItem
          title="Study"
          subTitle="Language courses, development"
          url="pictures/icons/themeIcons/study_icon.svg"
          @click="handleClick(4)"
        />
        <SelectThemeItem
          title="Cooking"
          subTitle="Dishes and recipes"
          url="pictures/icons/themeIcons/cooking_icon.svg"
          @click="handleClick(3)"
        />
        <SelectThemeItem
          title="Bonds"
          subTitle="With people, friends, lovers"
          url="pictures/icons/themeIcons/bond_icon.svg"
          @click="handleClick(2)"
        />
        <SelectThemeItem
          title="Fun"
          subTitle="Music, games, films, jokes, comedy "
          url="pictures/icons/themeIcons/fun_icon.svg"
          @click="handleClick(1)"
        />
      </div>
    </div>
  </div>
</template>

<style>
@import "./SelectTheme.scss";
</style>
