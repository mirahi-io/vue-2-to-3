<template>
  <div>
    <span>A nice item!</span>
    <button @click="subtract">-</button>
    <span>{{ amount }}</span>
    <button @click="add">+</button>
  </div>
</template>

<script>
import { eventBus } from "./eventBus";
export default {
  data() {
    return {
      amount: 0,
    };
  },
  methods: {
    add() {
      this.amount = this.amount + 1;
    },
    subtract() {
      this.amount = Math.max(this.amount - 1, 0);
    },
  },
  watch: {
    amount(newVal) {
      eventBus.$emit("cart-update", newVal);
    },
  },
};
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