<script setup>
const { bool, set } = useBoolean(true)

watch(bool, (newBool) => console.log('bool', newBool))

const min = ref(0)
const max = ref(10)
</script>

<template>
  <div class="home">
    <h1>Inputs</h1>
    <div class="checkboxes">
      <CoolSwitch :value="bool" @click="set" />
      <CoolCheckbox :value="bool" @click="set" />
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