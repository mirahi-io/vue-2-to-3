<template>
  <div class="toggle">
    <input :checked="bool" @click.capture="toggle" type="checkbox" id="temp" />
    <label for="temp">{{ label }}</label>
  </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{
  value: boolean,
  label?: string,
}>(), {
  label: 'Switch'
})

const { value } = toRefs(props)

const { bool, toggle, set } = useBoolean(value.value)

const emit = defineEmits<{
  (e: 'click', payload: boolean): void
}>()

useSync([value, bool], [set, (val: boolean) => emit('click', val)])
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

$bg-color: #ffffff;
$toggle-bg-color: lightblue;
$toggle-nub-color: lightgreen;
$font-color: black;

.toggle {
  input[type="checkbox"] {
    display: none;
  }

  label {
    color: $font-color;
    position: relative;
  }

  input[type="checkbox"] + label::before {
    content: " ";
    display: block;
    height: 18px;
    width: 45px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    position: absolute;
    top: 0px;
    left: -65px;
    background: $toggle-bg-color;
  }

  input[type="checkbox"] + label::after {
    content: " ";
    display: block;
    height: 30px;
    width: 30px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 50%;
    position: absolute;
    top: -6px;
    left: -75px;
    background: $toggle-nub-color;
    transition: all 0.3s ease-in;
  }

  input[type="checkbox"]:checked + label::after {
    left: -40px;
    transition: all 0.3s ease-in;
  }
}
</style>