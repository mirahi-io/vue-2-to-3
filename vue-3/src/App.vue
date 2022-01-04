<script setup>
import { ref } from 'vue'
import CoolSwitch from './components/CoolSwitch.vue'
import CoolCheckbox from './components/CoolCheckbox.vue'
import Shop from './components/shop/Shop.vue'

const bool = ref(true)

const toggle = (v) => bool.value = v
</script>

<template>
  <Shop />
  {{ `${bool ? "" : "un"}checked` }}
  <CoolSwitch :value="bool" @click="toggle" />
  <CoolCheckbox :value="bool" @click="toggle" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
