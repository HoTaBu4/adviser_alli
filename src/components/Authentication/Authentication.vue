<script setup lang="ts">
import { reactive, ref } from "vue";

const data = reactive({
  email: {
    text: "",
    error: "",
  },
  password: {
    text: "",
    error: "",
  },
});

const isLoading = ref(false);
const isEmailValid = ref(false);

const handleSubmit = (event: Event) => {
  event.preventDefault();

  if (!isEmailValid.value) {
    validateEmail();
  } else {
    validatePassword();
  }
};

const validateEmail = () => {
  const emailRegex =
    /^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  data.email.error = "";

  // Email validation
  if (!emailRegex.test(data.email.text)) {
    data.email.error = "Invalid email format";
  } else {
    isEmailValid.value = true;
  }
};

const validatePassword = () => {
  data.password.error = "";

  if (data.password.text.length < 8 || data.password.text.length > 30) {
    data.password.error = "8 - 30 characters";
  }

  // If both fields are valid, proceed with form submission logic
  if (!data.password.error) {
  }
};
</script>

<template>
  <div class="authentication">
    <div class="authentication__container">
      <form class="authentication__form">
        <div
          class="authentication__email-block"
          :class="{ 'slide-out-left': isEmailValid, visible: !isEmailValid }"
        >
          <label
            for="name"
            class="authentication__email"
            :class="{ 'authentication__label--error': data.email.error }"
          >
            {{ data.email.error ? data.email.error : "Email" }}
          </label>
          <input
            type="text"
            class="authentication__email--input"
            placeholder="Email"
            name="name"
            v-model="data.email.text"
            :class="{ 'authentication__input--error': data.email.error }"
          />
        </div>
        <div
          class="authentication__password-block"
          :class="{ 'slide-in-right': isEmailValid, hidden: !isEmailValid }"
        >
          <label
            for="name"
            class="authentication__password"
            :class="{ 'authentication__label--error': data.password.error }"
          >
            8 - 30 symbols
          </label>
          <input
            type="text"
            class="authentication__password--input"
            :class="{ 'authentication__input--error': data.password.error }"
            placeholder="Password"
            v-model="data.password.text"
            name="name"
          />
        </div>
        <button class="authentication__button" @click="handleSubmit">
          continue
        </button>
      </form>
      <div class="authentication__register-block">
        <div class="authentication__register-text">don`t have an accaunt</div>
        <a href="" class="authentication__register-link">register</a>
      </div>
      <div class="authentication__or">
        <div class="authentication__or--line"></div>
        <div class="authentication__or--text">or</div>
        <div class="authentication__or--line"></div>
      </div>
      <div class="authentication__social-neworks">
        <button class="authentication__facebook">
          <img src="/pictures/icons/facebook__icon.svg" alt="" />
          Register with Facebook
        </button>
        <button class="authentication__google">
          <img src="/pictures/icons/google__icon.svg" alt="" />
          Register with Google
        </button>
        <button class="authentication__iphone">
          <img src="/public/pictures/icons/apple__icon.svg" alt="" />
          Register with Apple
        </button>
      </div>
    </div>
  </div>
</template>

<style>
@import "./authenticationStyle.scss";
</style>
