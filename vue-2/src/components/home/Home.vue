<script>
import CoolSwitch from '../CoolSwitch.vue'
import CoolCheckbox from '../CoolCheckbox.vue'
import CoolRange from '../CoolRange.vue'

export default {
  name: 'Home',
  components: {
    CoolCheckbox,
    CoolRange,
    CoolSwitch
  },
  data() {
    return {
      bool: true,
      min: 0,
      max: 10
    }
  },
  methods: {
    toggle(v) {
      this.bool = v
    }
  }
}
</script>

<template>
  <div>
    <div class="home">
      <h1>Inputs</h1>
      <div class="checkboxes">
        <CoolSwitch :value="bool" @click="toggle" />
        <CoolCheckbox :value="bool" @click="toggle" />
      </div>
      <div>
        <CoolRange v-bind.sync:max="max" v-bind.sync:min="min" />
      </div>
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