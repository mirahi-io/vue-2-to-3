<template>
  <div id="app">
    <CoolButton @click.right.native="congratulate" @click="greet" msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import CoolButton from './components/CoolButton.vue'

export default {
  name: 'App',
  components: {
    CoolButton
  },
  methods: {
    greet() {
      console.log('Hello there!')
    },
    congratulate() {
      console.log('Wow you clicked right on the button!')
    }
  }
}
</script>

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
