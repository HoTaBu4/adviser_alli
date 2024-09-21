<script setup lang="ts">
import { onMounted, onUnmounted, reactive} from 'vue';
import InputField from '../../CommonComponents/InputField/InputField.vue';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import { Languages } from '../../../store/types/LanguageType';

const info = reactive({
  name: {
    text: '',
    error: '',
  },
  password: {
    text: '',
    error: '',
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
}

const handleClose = () => {
  emit('close-modal')
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  if (target && target.classList && target.classList.contains("settings-modal")) {
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

</script>

<template>
  <div class="settings-modal" 
    @click="handleOutsideClick" 
  >
    <form class="settings-modal__content" @click.stop>
      <div class="settings-modal__close">
        <img src="/pictures/icons/mobile_close.svg" alt="" class="settings-modal__close-img" @click="handleClose">
      </div>
      <div class="settings-modal__title">
        YOUR ACCOUNT
      </div> 
      <div class="settings-modal__name">
        <InputField 
          v-model="info.name.text"
          :error="info.name.error"
          :placeholder="language === Languages.us ? 'name' : `ім&#39я`"
          :name="'name'"
          :isStatic="true"
          :labelText="language === language.us ? 'name' : `ім&#39я`"
        />
      </div>
      <div class="settings-modal__language">
        <div class="settings-modal__language-title">{{language === Languages.us ? 'language :' : 'мова :'}}</div>
        <div class="settings-modal__language-change">
          <div 
            class="settings-modal__en"
            :class="{'settings-modal__en--selected': language === Languages.us}"
            @click="handleChangeLanguage(Languages.us)"
          >
            EN
          </div>
          <div 
            class="settings-modal__uk"
            :class="{'settings-modal__uk--selected': language === Languages.uk}"  
            @click="handleChangeLanguage(Languages.uk)"
          >
            UK
          </div>
        </div>
      </div>
      <div class="settings-modal__password">
        <InputField 
          v-model="info.password.text"
          :error="info.password.error"
          :placeholder="language === Languages.us ? 'password' : `пароль`"
          :name="'name'"
          :isStatic="true"
          :labelText="language === language.us ? 'password' : `пароль`"
        />
      </div>
      <div class="settings-modal__buttons">
        <button class="settings-modal__save" @click="handleSubmit">
          {{ language === Languages.uk ? 'SAVE' : 'ЗБЕРЕГТИ'}}
        </button>
        <button class="settings-modal__log-out">
          {{language === Languages.uk ? 'log out' : 'ВИЙТИ'}}
        </button>
      </div>
      
    </form>
  </div>
</template>

<style>
@import './SettingsModal.scss';
</style>