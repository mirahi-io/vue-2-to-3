<template>
  <div class="container">
    <input :checked="bool" @click="toggle" type="checkbox" id="cc" />
    <label for="cc">{{ label }}</label>
  </div>
</template>

<script>
import { boolMixin } from "../mixins/boolean";

export default {
  mixins: [boolMixin],
  props: {
    label: {
      type: String,
      default: 'Checkbox'
    }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.container {
  line-height: 1.1;
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="checkbox"]::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em lightcoral;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
</style>