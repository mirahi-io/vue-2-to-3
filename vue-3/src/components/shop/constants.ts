import { Ref } from 'vue'

export type CART = {
  amount: Ref<number>;
  set: (amount: number) => void
}

export const CART_KEY = Symbol('CART')