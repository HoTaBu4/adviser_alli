<script setup lang="ts">
import Burger from "./Burger/Burger.vue";
import Sidebar from "./SideBar/Sidebar.vue";
import SelectTheme from "./SelectTheme/SelectTheme.vue";
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import SettingsModal from "./SettingsModal/SettingsModal.vue";
import { useStore } from "vuex";
import { RootState } from "../../store/store";
import { AuthenticationTypes } from "../../assets/types/AuthenticationType";
import Chat from "./Chat/Chat.vue";

const isOpenSidebar = ref(false);
const isOpenModal = ref(false);
const windowWidth = ref(window.innerWidth);

const store = useStore<RootState>();

const user = computed(() => store.state.user.user)

const toggleSidebar = () => {
  isOpenSidebar.value = !isOpenSidebar.value;
};

// Define the resize handler function
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  //adding resize event
  window.addEventListener("resize", handleResize);
  console.log(user.value)
  
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

const closeModal = () => {
  isOpenModal.value = false;
}
</script>

<template>
  <div class="home__container">
    <header class="home-header">
      <div class="home-header__container">
        <Burger
          :isOpenSidebar
          @toggle-sidebar="toggleSidebar"
          v-if="windowWidth <= 900"
        />
        <div class="home-header__icon">
          <img
            src="/pictures/icons/main__logo__tablet.png"
            alt=""
            class="home-header__icon--tablet"
          />
          <img
            src="/pictures/icons/main__logo_phone.png"
            alt=""
            class="home-header__icon--phone"
          />
          Ellie.ai
        </div>
        <div class="home-header__profile">
          <svg 
            viewBox="0 0 27 28"
            xmlns="http://www.w3.org/2000/svg" 
            class="home-header__profile--img" 
            @click="isOpenModal = true"
            v-if="!user.isGuest"
          >
            <path d="M13.6953 27.377C6.4082 27.377 0.447266 21.416 0.447266 14.1289C0.447266 6.8418 6.4082 0.880859 13.6953 0.880859C20.9824 0.880859 26.9434 6.8418 26.9434 14.1289C26.9434 21.416 20.9824 27.377 13.6953 27.377ZM13.6953 18.5586C18.4531 18.5586 21.9121 20.9512 22.8281 22.7695C24.9746 20.5137 26.2734 17.4648 26.2734 14.1289C26.2734 7.18359 20.6406 1.55078 13.6953 1.55078C6.76367 1.55078 1.11719 7.18359 1.11719 14.1289C1.11719 17.4512 2.41602 20.4863 4.53516 22.7422C5.50586 20.9238 8.96484 18.5586 13.6953 18.5586ZM13.6953 16.1797C11.0703 16.1797 9.08789 13.9512 9.08789 11.0527C9.06055 8.33203 11.125 6.02148 13.6953 6.02148C16.252 6.02148 18.2891 8.33203 18.2891 11.0527C18.2891 13.9512 16.3066 16.1797 13.6953 16.1797Z" fill="#B1B0B4"/>
          </svg>
          <RouterLink :to="{ name: 'authentication', params: { type: AuthenticationTypes.login }}" class="home-header__log-in">
            LOG IN
          </RouterLink>
        </div>
      </div>
    </header>
    <main class="home">
      <div class="home__wrapper">
        <Transition name="settings_modal">
          <SettingsModal v-if="isOpenModal" @close-modal="closeModal"/>
        </Transition>
        <Sidebar :isOpenSidebar />
        <SelectTheme v-if="false" />
        <Chat />
      </div>
    </main>
  </div>
</template>

<style>
@import "./HomeStyle.scss";
</style>
