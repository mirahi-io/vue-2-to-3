<template>
  <div class="container">
    <input :checked="bool" @click="toggle" type="checkbox" id="cc" />
    <label for="cc">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, toRefs, watch, withDefaults } from 'vue'
import { useBoolean } from '../composables/useBoolean';

const props = withDefaults(defineProps<{
  value: boolean,
  label?: string,
}>(), {
  label: 'Checkbox'
})

const { value } = toRefs(props)

const { bool, toggle, set } = useBoolean(value.value)

const emit = defineEmits<{
  (e: 'click', payload: boolean): void
}>()

watch(value, (newVal) => {
  set(newVal)
})

watch(bool, (newVal) => {
  emit('click', newVal)
})
</script>

<style lang="scss" scoped>
.container {
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em lightcoral;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
</style>