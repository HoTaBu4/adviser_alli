<script setup lang="ts">
import { computed,ref } from "vue";
import { useLanguage } from "../../../assets/hooks/useLanguage";
import { Languages } from "../../../store/types/LanguageType";
import { useStore } from "vuex";
import { RootState } from "../../../store/store";

defineProps({
  isOpenSidebar: {
    type: Boolean,
    required: true,
  },
});

const isOpenSaved = ref(false);
const isOpenRequest = ref(false);

const { language } = useLanguage();

const store = useStore<RootState>();

const user = computed(() => store.state.user);

</script>

<template>
  <aside class="aside" :class="{ open: isOpenSidebar }">
    <div class="aside__wrapper">
      <div
        class="aside__request"
        :class="{
          'full-height': isOpenRequest && !isOpenSaved,
          'half-height': isOpenRequest && isOpenSaved,
          closed: !isOpenRequest,
        }"
      >
        <div class="aside__controller" @click="isOpenRequest = !isOpenRequest">
          <div class="aside__title">
            {{
              language === Languages.uk ? "останні запити" : "recent request:"
            }}
          </div>
          <img
            src="/pictures/icons/arrow.svg"
            alt=""
            class="aside__arrow"
            :class="{ 'aside__arrow--isOpen': isOpenRequest }"
          />
        </div>
        <div class="aside__container">
          <div class="aside__red-notice" v-if="user.user.isGuest">
            {{
              language === Languages.uk
                ? `Bи не можете отримати доступ до історії пошуку чи збережених рекомендацій, якщо ви увійшли як гість.`
                : `You can&#39;t access your search history or saved recommendations since you logged in as a guest.`
            }}
          </div>
          
        </div>
      </div>
      <div
        class="aside__saved"
        :class="{
          'full-height': isOpenSaved && !isOpenRequest,
          'half-height': isOpenSaved && isOpenRequest,
          closed: !isOpenSaved,
        }"
      >
        <div class="aside__controller" @click="isOpenSaved = !isOpenSaved">
          <div class="aside__title">
            {{ language === Languages.uk ? "збережені:" : `saved:` }}
          </div>
          <img
            src="/pictures/icons/arrow.svg"
            alt=""
            class="aside__arrow"
            :class="{ 'aside__arrow--isOpen': isOpenSaved }"
          />
        </div>
        <div class="aside__container">
          <div class="aside__red-notice" v-if="user.user.isGuest">
            {{
              language === Languages.uk
                ? `Bи не можете отримати доступ до історії пошуку чи збережених рекомендацій, якщо ви увійшли як гість.`
                : `You can&#39;t access your search history or saved recommendations since you logged in as a guest.`
            }}
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
@import "./sidebar.scss";
</style>
