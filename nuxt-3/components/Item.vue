<template>
  <div>
    <span>Juicy {{ name }}</span>
    <button @click="subtract">-</button>
    <span>{{ amount }} {{ logo }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script setup lang="ts">

type Props = {
  name: string
  logo: string
  amount: number
}

const props = defineProps<Props>()

const { logo, name, amount } = toRefs(props)

const emit = defineEmits<{
  (e: 'add'): void
  (e: 'subtract'): void
}>()

const add = () => {
  emit('add')
}

const subtract = () => {
  emit('subtract')
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