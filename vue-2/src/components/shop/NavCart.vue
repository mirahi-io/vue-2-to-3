<template>
  <div class="cart">
    <div v-if="amount" class="amount">{{ amount }}</div>Cart 🛒
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
  created() {
    eventBus.$on("cart-update", (newVal) => {
      this.amount = newVal;
    });
  },
  destroyed() {
    eventBus.$off("cart-update");
  },
};
</script>

<style scoped>
.cart {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 4px 8px;
  height: 30px;
  border-radius: 4px;
  margin: 0px 8px;
  position: relative;
}

.amount {
  font-size: 10px;
  color: white;
  position: absolute;
  right: 1px;
  background-color: tomato;
  border-radius: 50%;
  min-width: 14px;
  height: 14px;
}
</style>