<template>
  <div>
    <label>
      Min: {{ min }}
      <input
        type="number"
        :value="min"
        :max="max"
        @input="updateMinHandler"
        class="cool"
      />
    </label>
    <label>
      Max: {{ max }}
      <input
        type="number"
        :value="max"
        :min="min"
        @input="updateMaxHandler"
        class="cool"
      />
    </label>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, withDefaults, toRefs } from 'vue'

type Props = {
  min?: number;
  max?: number
}

const props = withDefaults(defineProps<Props>(), {
  min: 0,
  max: 10
})

const { min, max } = toRefs(props)

const emit = defineEmits<{
  (e: 'update:min', val: number): void
  (e: 'update:max', val: number): void
}>()

const updateMinHandler = (e: Event) => {
  emit('update:min', e.target.value)
}
const updateMaxHandler = (e: Event) => {
  emit('update:max', e.target.value)
}
</script>

<style scoped>
.cool {
  border-radius: 4px;
  background-color: lightblue;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  width: 3em;
}
</style>
