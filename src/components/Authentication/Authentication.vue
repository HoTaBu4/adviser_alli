<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useLanguage } from "../../assets/hooks/useLanguage";
import { Languages } from "../../store/types/LanguageType";
import InputField from "../CommonComponents/InputField/InputField.vue";
import { FieldsTypes } from "../../assets/types/fieldTypes";
// import { loginUser, registerUser } from "../../api/user/user";
import { AuthenticationTypes } from "../../assets/types/AuthenticationType";

const data = reactive({
  email: {
    text: "",
    error: "",
    valid: false,
  },
  password: {
    text: "",
    error: "",
    valid: false,
  },
  username: {
    text: "",
    error: "",
    valid: false,
  }
});

const router = useRouter();
const route = useRoute();
const { language } = useLanguage();

const isLogin = ref(false);
const currentField = ref(FieldsTypes.email);
const lastField = ref(FieldsTypes.email);

const fieldOrder = [FieldsTypes.email, FieldsTypes.password, FieldsTypes.username];

if (route.params.type === 'login') {
  isLogin.value = true;
} else if (route.params.type === 'register') {
  isLogin.value = false;
}

const goToNextField = (nextField: FieldsTypes) => {
  lastField.value = currentField.value;
  currentField.value = nextField;
};

const goToPreviousField = () => {  
  let currentIndex = fieldOrder.indexOf(currentField.value);

  if (currentIndex > 0) {
    // Set current field as invalid
    currentField.value = fieldOrder[currentIndex - 1];
    data[currentField.value].valid = false;
    
    // Move to the previous field
    lastField.value = currentField.value; 
    
  }
};

const goToHome = () => {
  router.push({ name: "Home" });
};

const handleSubmit = () => {
  // if (!isLogin.value) {
  //   // Registration process
  //   registerUser({email: data.email.text, password: data.password.text, username: data.username.text}).then(() => console.log(data));
  // } else {
  //   // Login process
  //   loginUser({email: data.email.text, password: data.password.text});
  // }
  goToHome()
}

const MainValidation = (event: Event) => {
  
  event.preventDefault();
  if (!data.email.valid) {
    validateEmail();
    return
  } else if (!data.password.valid) {
    validatePassword();
    return
  } else if (!isLogin && !data.username.valid){
    validateUserName();
  }
  
  handleSubmit();  
};

const validateEmail = () => {
  const emailRegex = /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  data.email.error = "";

  if (!emailRegex.test(data.email.text)) {
    data.email.error =
      language.value === Languages.us
        ? "Invalid email format"
        : "Недійсний формат пошти";
  } else {
    data.email.valid = true;
    goToNextField(FieldsTypes.password);
    data.email.valid = true;
  }
};

const validatePassword = () => {
  data.password.error = "";

  if (data.password.text.length < 8 || data.password.text.length > 30) {
    data.password.error =
      language.value === Languages.us
        ? "8 - 30 characters"
        : "8 - 30 знаків";
  } else {
    data.password.valid = true;
    if (!isLogin.value) {
      goToNextField(FieldsTypes.username);
    }
    
  }
};

const validateUserName = () => {
  data.username.error = "";

  if (data.username.text.length < 4 || data.username.text.length > 15) {
    data.username.error =
      language.value === Languages.us
        ? "4 - 15 characters"
        : "4 - 15 знаків";
  } else {
    data.username.valid = true;
  }
};
</script>


<template>
  <div class="authentication">
    <div class="authentication__container">
      <form class="authentication__form">
        <InputField 
          :name="FieldsTypes.email"
          v-model="data.email.text" 
          :error="data.email.error"
          :placeholder="language === Languages.us ? 'Email': 'Пошта'"
          :isValid="data.email.valid"
          :currentField
          :lastField="lastField"
          :labelText="Languages.us ? 'Email address': 'електронна пошта'" 
        />
        <InputField
          :name="FieldsTypes.password"
          v-model="data.password.text" 
          :error="data.password.error"
          :placeholder="language === Languages.us ? 'password': 'пароль'"
          :isValid="data.password.valid"
          :currentField
          :lastField="lastField"
          :labelText="Languages.us ? 'password': 'пароль'"
        />
        <InputField
          v-if="!isLogin"
          :name="FieldsTypes.username"
          v-model="data.username.text"
          :error="data.username.error"
          :placeholder="language === Languages.us ? 'username': `ім&#39я користувача`"
          :isValid="data.username.valid"
          :currentField
          :lastField="lastField"
          :labelText="language === Languages.us ? 'username': `ім&#39я користувача`"
        />
        <button
          v-if="currentField !== FieldsTypes.email"
          type="button"
          class="back_button"
          @click="goToPreviousField"
          style="margin-top: 100px;"
        >
          {{ language === Languages.us ? "Back" : "Назад" }}
        </button>
        <button class="authentication__button" @click="MainValidation">
          {{ language === Languages.uk ? "continue" : "продовжити" }}
        </button>
      </form>
      <div class="authentication__register-block" v-if="isLogin">
        <div
          class="authentication__register-text" 
          
          replace
        >
          don`t have an accaunt
        </div>
        <RouterLink 
          :to="{ name: 'authentication', params: { type: AuthenticationTypes.register }}" 
          class="authentication__register-link"
        >
          {{ language === Languages.uk ? "register" : "зареєстуватися"}}
        </RouterLink>
      </div>
      <div class="authentication__or">
        <div class="authentication__or--line"></div>
        <div class="authentication__or--text">or</div>
        <div class="authentication__or--line"></div>
      </div>
      <div class="authentication__social-neworks">
        <button class="authentication__facebook">
          <img src="/pictures/icons/facebook__icon.svg" alt="" />
          {{
            language === Languages.uk
              ? "Register with Facebook"
              : "зареєструватися з Facebook"
          }}
        </button>
        <button class="authentication__google">
          <img src="/pictures/icons/google__icon.svg" alt="" />
          {{
            language === Languages.uk
              ? "Register with Google"
              : "зареєструватися з Google"
          }}
        </button>
        <button class="authentication__iphone">
          <img src="/public/pictures/icons/apple__icon.svg" alt="" />
          {{
            language === Languages.uk
              ? "Register with Apple"
              : "зареєструватися з Apple"
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import "./authenticationStyle.scss";
</style>
