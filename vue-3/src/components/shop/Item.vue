<template>
  <div>
    <span>A nice item!</span>
    <button @click="subtract">-</button>
    <span>{{ store.item }} 🍾</span>
    <button @click="add">+</button>
  </div>
</template>

<script setup lang="ts">
import { useItemStore } from '../../composables/useItemStore'

const store = useItemStore()

const add = () => {
  store.increment()
}

const subtract = () => {
  store.decrement()
}

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