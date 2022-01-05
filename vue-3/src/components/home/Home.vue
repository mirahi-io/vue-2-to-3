<script setup>
import { ref } from 'vue'
import CoolSwitch from '../CoolSwitch.vue'
import CoolCheckbox from '../CoolCheckbox.vue'
import CoolRange from '../CoolRange.vue'

const bool = ref(true)
const min = ref(0)
const max = ref(10)

const toggle = (v) => bool.value = v
</script>

<template>
  <div class="home">
    <h1>Inputs</h1>
    <div class="checkboxes">
      <CoolSwitch :value="bool" @click="toggle" />
      <CoolCheckbox :value="bool" @click="toggle" />
    </div>
    <div>
      <CoolRange v-model:min="min" v-model:max="max" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 200px;
}

.checkboxes {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 400px;
}
</style>