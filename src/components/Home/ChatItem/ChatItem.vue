<script setup lang="ts">
defineProps({
  isUserItem: {
    type: Boolean,
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <div
    class="chat-item"
    :class="{ 'chat-item--ai': !isUserItem, 'chat-item--user': isUserItem }"
  >
    <div class="chat-item__image">
      <img
        src="/pictures/icons/mage_robot-happy.svg"
        alt=""
        v-if="!isUserItem"
        class="chat-item__img"
      />
    </div>
    <div
      class="chat-item__text"
      :class="{
        'chat-item__text--ai': !isUserItem,
        'chat-item__text--user': isUserItem,
      }"
    >
      <div class="chat-item__text-wrapper">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./ChatItem.scss";
</style>
