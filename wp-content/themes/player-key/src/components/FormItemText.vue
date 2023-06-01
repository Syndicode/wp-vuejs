<script>
export default {
  name: "FormItemText",
  emits: ['update:modelValue'],
  props: {
    inputType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    cssModifier: {
      type: String,
    },
    isDisabled: {
      type: Boolean,
    }
  }
}
</script>

<template>
  <label v-if="['text', 'email', 'password', 'date'].includes(inputType)" class="form-item-text"
         :class="cssModifier ? `form-item-text--${cssModifier} ` : ``">
        <span class="form__label">
            {{ label }} <sup v-if="isRequired">*</sup>
        </span>
    <input :type="inputType"
           :name="label.replace(' ', '-').toLowerCase()"
           :value="modelValue"
           :placeholder="placeholder"
           :required="isRequired"
           :disabled="isDisabled"
           @input="$emit('update:modelValue', $event.target.value)"
           class="form-item-text__field">
  </label>
</template>

<style scoped>
.form-item-text {
  display: block;
  margin-bottom: 20px;
}

.form-item-text--full {
  grid-column-start: 1;
  grid-column-end: 3;
}

.form-item-text__label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 300;
}

.form-item-text__label sup {
  font-weight: 700;
  color: #3a0000;
}

.form-item-text__field {
  -webkit-appearance: none;
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  border: 1px solid #a8a8a8;
  outline: none;
  transition: border-color;
}

.form-item-text__field:focus {
  border-color: var(--rich-black);
}
</style>
