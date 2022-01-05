<template>
  <div class="toggle">
    <input :checked="bool" @click="toggle" type="checkbox" id="temp" />
    <label for="temp">{{ label }}</label>
  </div>
</template>

<script>
import { boolMixin } from "../mixins/boolean";

export default {
  mixins: [boolMixin],
  props: {
    label: {
      type: String,
      default: 'Switch'
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.toggle {
  margin-top: 40px;
}

input[type="checkbox"] {
  display: none;
}

label {
  color: black;
  position: relative;
}

input[type="checkbox"] + label::before {
  content: " ";
  display: block;
  height: 18px;
  width: 45px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 9px;
  position: absolute;
  top: 0px;
  left: -65px;
  background: lightblue;
}

input[type="checkbox"] + label::after {
  content: " ";
  display: block;
  height: 30px;
  width: 30px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  position: absolute;
  top: -6px;
  left: -75px;
  background: lightgreen;
  transition: all 0.3s ease-in;
}

input[type="checkbox"]:checked + label::after {
  left: -40px;
  transition: all 0.3s ease-in;
}
</style>