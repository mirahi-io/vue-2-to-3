<template>
  <div @click="on" class="cart">
    <div v-if="totalAmount" class="amount">{{ totalAmount }}</div>Cart 🛒
    <CoolModal :visible="visible">
      <div class="modal">
        <p>Price: {{ totalPrice }}€</p>
        <p>VAT: {{ vatAmount }}€</p>
        <p>Price without VAT: {{ priceWithoutVat }}€</p>
        <p>Do you want to empty the cart?</p>
        <div class="buttons">
          <CoolButton @click="confirm">Yes!</CoolButton>
          <CoolButton @click="cancel">No!</CoolButton>
        </div>
      </div>
    </CoolModal>
  </div>
</template>

<script setup lang="ts">
import CoolModal from '../CoolModal.vue';
import CoolButton from '../CoolButton.vue'

const { $vat } = useNuxtApp()
const { totalAmount, totalPrice, reset } = useCart()

const { bool: visible, on, off } = useBoolean(false)

const priceWithoutVat = computed(() => $vat(totalPrice.value).taxLess)
const vatAmount = computed(() => $vat(totalPrice.value).taxAmount)

const confirm = () => {
  off()
  reset()
}

const cancel = () => {
  off()
}

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

.modal {
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-content: space-between;
}

.buttons {
  margin-top: 16px;
  display: flex;
  flex-direction: row-reverse;
}
</style>