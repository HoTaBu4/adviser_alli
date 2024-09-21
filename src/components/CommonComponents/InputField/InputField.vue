<script setup lang="ts">

defineProps({
  isValid: {
    type: Boolean,
    required: false,
  },
  error: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  currentField: {
    type: String,
    required: false,
  },
  isStatic: {
    type:Boolean,
    required: false
  },
  labelText : {
    type: String,
    required: true  
  }, 
  lastField: {
    type: String,
    required: false,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

</script>
<template>
  <div
    class="input-field"
    :class="{
      'slide-out-left': !isStatic && (lastField !== name || lastField === name) && currentField !== name,
      'slide-in-right': !isStatic && lastField !== name && currentField === name,
      'right-position': !isStatic && currentField !== name && !isValid,
      'input-field--static': isStatic
    }"
    
  >
    <label
      :for="name"
      class="input-field__label"
      :class="{ 'input-field__label--error': error }"
    >
      {{ error ? error : `${labelText}`}}
    </label>
    <input
      type="text"
      class="input-field__input"
      :placeholder="placeholder"
      :name="name"
      :value="modelValue"
      @input="handleInput"
      :class="{ 'input-field__input--error': error }"
    />
  </div>
</template>

<style>
@import './inputField.scss';
</style>