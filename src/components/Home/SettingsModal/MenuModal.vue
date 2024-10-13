<script setup lang="ts">
import { onMounted, onUnmounted, reactive} from 'vue';
import InputField from '../../CommonComponents/InputField/InputField.vue';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';
import { logout } from '../../../services/authService';
import { deleteAllSavedMessages } from '../../../api/messages/messages';
import { deleteAllChats } from '../../../store/modules/chats';

const info = reactive({
  name: {
    text: '',
    error: '',
  },
  password: {
    text: '',
    error: '',
  },
  repeatedPassword: {
    text: '',
    error: '',
  }
})

defineProps({
  type: {
    type: String,
  }
})

// const modalRef = ref<VNodeRef | null>(null);
const emit = defineEmits(['close-modal'])
const { language, handleSetLanguage } = useLanguage();

const handleChangeLanguage = (targetLanguage: Languages) => { 
  if (language.value !== targetLanguage) {
    handleSetLanguage(targetLanguage);
  }
}

const handleSubmit = (event: Event) => {
  info.name.error = ''
  info.password.error = ''
  event.preventDefault();

  if (info.name.text.length < 4 || info.name.text.length > 15) {
    info.name.error = language.value === Languages.us 
      ? '4 - 15 symbols'
      : '4 - 15 символів'
  }

  if (info.password.text.length < 4 || info.password.text.length > 15) {
    info.password.error = language.value === Languages.us 
      ? '8 - 15 symbols'
      : '8 - 15 символів'
  } 
  if (info.repeatedPassword.text !== info.password.text) {
    info.repeatedPassword.error = language.value === Languages.us 
      ? 'passwords do not match'
      : 'паролі не збігаються'
  }
}

const handleClose = () => {
  emit('close-modal')
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target && target.classList && target.classList.contains("menu-modal")) {
    handleClose(); // Close the modal
  }
};

// Register the click event listener to detect clicks outside the modal
onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
})


const settgingsTitle = language.value === Languages.us ? 'SETTINGS :' : 'НАЛАШТУВАННЯ :';
const accountTitle = language.value === Languages.us ? 'YOUR ACCOUNT :' : 'ТВІЙ АККАУНТ :';
</script>

<template>
  <div class="menu-modal" 
    @click="handleOutsideClick" 
  >
    <form class="menu-modal__content" @click.stop>
      <div class="menu-modal__close">
        <img src="/pictures/icons/mobile_close.svg" alt="" class="menu-modal__close-img" @click="handleClose">
      </div>
      <div class="menu-modal__title">
        {{type === 'settings' ? settgingsTitle : accountTitle }}
      </div>
      <div class="menu-modal__settigns" v-if="type === 'settings'">
        <div class="menu-modal__language">
          <div class="menu-modal__language-title">{{language === Languages.us ? 'language :' : 'мова :'}}</div>
          <div class="menu-modal__language-change">
            <div 
              class="menu-modal__en"
              :class="{'menu-modal__en--selected': language === Languages.us}"
              @click="handleChangeLanguage(Languages.us)"
            >
              EN
            </div>
            <div 
              class="menu-modal__uk"
              :class="{'menu-modal__uk--selected': language === Languages.uk}"  
              @click="handleChangeLanguage(Languages.uk)"
            >
              UK
            </div>
          </div>
        </div>
        <div class="menu-modal__buttons"> 
          <button class="menu-modal__delete-chats" @click="deleteAllSavedMessages()">
            {{language === Languages.us ? 'DELETE ALL SAVED MESSAGES' : 'ВИДАЛИТИ ВСІ ЗБЕРЕЖЕНІ'}}
          </button>
          <button class="menu-modal__delete-chats" @click="deleteAllChats()">
            {{language === Languages.us ? 'DELETE ALL CHATS' : 'ВИДАЛИТИ ВСІ ЧАТИ'}}
          </button>
        </div>
      </div>
      <div class="menu-modal__account" v-else>
        
        <div class="menu-modal__password">
          <InputField 
            v-model="info.password.text"
            :error="info.password.error"
            :placeholder="language === Languages.us ? 'password' : `пароль`"
            :name="'password'"
            :isStatic="true"
            :labelText="language === language.us ? 'password' : `пароль`"
            :labelColor="true"
          />
          <InputField 
            v-model="info.password.text"
            :error="info.password.error"
            :placeholder="language === Languages.us ? 'password' : ` повторити пароль`"
            :name="'repeat password'"
            :isStatic="true"
            :labelText="language === language.us ? 'password' : `  повторити пароль`"
            :labelColor="true"
          />
        </div>
        <div class="menu-modal__buttons">
          <button class="menu-modal__save" @click="handleSubmit">
            {{ language === Languages.uk ? 'SAVE' : 'ЗБЕРЕГТИ'}}
          </button>
          <button class="menu-modal__log-out" @click="logout()">
            {{language === Languages.uk ? 'log out' : 'ВИЙТИ'}}
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
@import './menuModal.scss';
</style>