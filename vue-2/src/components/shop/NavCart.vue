<template>
  <div @click.capture="show" class="cart">
    <div v-if="amount" class="amount">{{ amount }}</div>Cart 🛒
    <CoolModal :visible="visible">
      <div class="modal">
        <p>Do you want to empty the cart?</p>
        <div class="buttons">
          <CoolButton @click="confirm">Yes!</CoolButton>
          <CoolButton @click="cancel">No!</CoolButton>
        </div>
      </div>
    </CoolModal>
  </div>
</template>

<script>
import { eventBus } from "./eventBus";
import CoolButton from '../CoolButton.vue'
import CoolModal from '../CoolModal.vue'

export default {
  components: {
    CoolButton,
    CoolModal
  },
  data() {
    return {
      amount: 0,
      visible: false,
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
  methods: {
    show() {
      this.visible = true
    },
    confirm() {
      this.visible = false
      eventBus.$emit('cart-update', 0)
    },
    cancel() {
      this.visible = false
    }
  }
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
  display: grid;
  place-content: center;
}
</style>