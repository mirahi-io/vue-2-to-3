<template>
  <div>
    <span>A nice item!</span>
    <button @click="subtract">-</button>
    <span>{{ innerAmount }} 🍾</span>
    <button @click="add">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { CART, CART_KEY } from './constants'

const innerAmount = ref(0)

const add = () => {
  innerAmount.value = innerAmount.value + 1
}

const subtract = () => {
  innerAmount.value = Math.max(innerAmount.value - 1, 0)
}

const { set, amount } = inject<CART>(CART_KEY)

watch(amount, (val) => innerAmount.value = val)
watch(innerAmount, set)

</script>

<style scoped>
button {
  border-radius: 100px;
  background-color: lightcyan;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 4px;
  width: 24px;
  height: 24px;
  margin: 4px;
}
</style>