<script setup lang="tsx">
import { reactive } from 'vue';
import { useLanguage } from '../../../assets/hooks/useLanguage';
import InputField from '../../CommonComponents/InputField/InputField.vue';
import { FieldsTypes } from '../../../assets/types/fieldTypes';
import { Languages } from '../../../store/types/LanguageType';
import Header from '../../CommonComponents/Header/Header.vue';
import { client } from '../../../api/fetchClient';

const { language } = useLanguage();

const email = reactive({
  text: '',
  error: '',
  valid: false,
})

const handleSubmit = () => {
  client.post('/forgot_password/',{"email": email.text})
    .then(() => {
      
    })
}

</script>

<template>
  <Header />
  <main class="main">
    <div class="reset-password">
      <div class="reset-password__start-block">
        <div class="reset-password__start-block--wrapper">
          <h1 class="reset-password__title">
            {{Languages.us ? 'RESET PASSWORD': 'ЗМІНА ПАРОЛЮ' }}
          </h1>
          <div class="reset-password__sub-title">
            {{Languages.us ? 
              'Please enter your email address to receive instructions on how to reset your password.'
            : 
              'Будь ласка, введіть свою електронну адресу, щоб отримати інструкції щодо скидання пароля.' 
            }}
          </div>
          <form 
            class="reset-password__controller"
            @submit.prevent="handleSubmit"
          >
            <InputField 
              :name="FieldsTypes.emailreset"
              v-model="email.text" 
              :error="email.error"
              :placeholder="language === Languages.us ? 'Email': 'Пошта'"
              :isValid="email.valid"
              :labelText="Languages.us ? 'Email address': 'електронна пошта'" 
              :isStatic="true"
            />
            <button class="reset-password__continue">
              {{ Languages.us ? 'CONTINUE': 'Продовжити'  }}
            </button>
          </form>
        </div>
      </div>
      <RouterLink 
        class="reset-password__back"
        to="Authentication/login"
        :replace="true"
      >
        <img src="/public/pictures/icons/back_arrow.svg" alt="" class="reset-password__back--img">
        <div class="reset-password__back--text">
          {{ Languages.us ? 'Back to Elli.ai': 'повернутися до Elli.ai' }}
        </div>
      </RouterLink>
    </div>
  </main>
</template>

<style>
@import 'ForgotPassword.scss';
</style>