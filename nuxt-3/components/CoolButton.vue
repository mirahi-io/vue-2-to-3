<template>
  <button @click="clickHandler" class="cool">
    <slot />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'click'): void
}>()

const clickHandler = () => {
  emit('click')
}
</script>

<style scoped>
.cool {
  border-radius: 4px;
  background-color: lightgreen;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
}
</style>
