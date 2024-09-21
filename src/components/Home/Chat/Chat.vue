<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";
import ChatItem from "../ChatItem/ChatItem.vue";

const text = ref<string>('');
const overflow = ref<boolean>(false);
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const maxRows = ref<number>(5);

function autoResize() {
  const textarea = textareaRef.value;
  if (!textarea) return;

  textarea.style.height = "auto"; // Скидаємо висоту для коректного вимірювання
  const scrollHeight = textarea.scrollHeight;
  const lineHeight = parseFloat(window.getComputedStyle(textarea).lineHeight);
  const rows = Math.floor(scrollHeight / lineHeight);

  if (rows > maxRows.value) {
    textarea.style.height = `${lineHeight * maxRows.value}px`; // Обмеження на висоту
    overflow.value = true;
  } else {
    textarea.style.height = `${scrollHeight}px`; // Автоматичне збільшення висоти
    overflow.value = false;
  }
}

onMounted(() => {
  nextTick(() => {
    autoResize();
  });
});
</script>

<template>
  <div class="chat">
    <div class="chat__header">
      <div class="chat__title"></div>
      <img src="" alt="" class="chat__img" />
    </div>
    <div class="chat__main">
      <ChatItem :isUserItem="true" text="assssssssssssssssssssssssssss" />
    </div>
    <form class="chat__form">
      <div class="chat__request">
        <div class="chat__textarea-container">
          <textarea
            v-model="text"
            ref="textareaRef"
            @input="autoResize"
            :rows="1"
            :style="{ overflowY: overflow ? 'scroll' : 'hidden' }"
            maxlength="500"
            class="chat__textarea"
            placeholder="CLARIFY YOUR REQUEST"
          ></textarea>
        </div>
        <div class="chat__request-controller">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="chat__img"
          >
            <path
              d="M15.4648 25.5C14.375 25.5 14.0117 24.6328 13.6602 23.4492L11.1992 15.0938
            L2.73828 12.6094C1.61328 12.2695 0.792969 11.9062 0.792969 10.8281C0.792969 
            9.97266 1.55469 9.375 2.53906 9L22.6953 1.27734C23.2344 1.06641 23.7148 
            0.949219 24.1133 0.949219C24.875 0.949219 25.3438 1.41797 25.3438 2.17969
            C25.3438 2.57812 25.2266 3.05859 25.0156 3.59766L17.3398 23.6484C16.9062 
            24.7734 16.3086 25.5 15.4648 25.5ZM11.7266 13.3125L19.7891 5.25C20.4336 
            4.60547 21.3945 3.85547 22.168 3.22266C21.3008 3.62109 20.3984 4.08984 
            19.4609 4.44141L3.61719 10.4414C3.44141 10.5117 3.39453 10.5703 3.39453 
            10.6523C3.39453 10.7344 3.45312 10.7812 3.64062 10.8398L11.7266 13.3125ZM
            15.6523 22.9219C15.7344 22.9219 15.7812 22.8516 15.8516 22.6758L21.8516 
            6.83203C22.2031 5.88281 22.6836 4.98047 23.082 4.08984C22.4609 4.88672 
            21.6758 5.87109 21.043 6.50391L12.9805 14.5664L15.4531 22.6523C15.5117 
            22.8398 15.5586 22.9219 15.6523 22.9219Z"
            />
          </svg>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
@import "./Chat.scss";
</style>
