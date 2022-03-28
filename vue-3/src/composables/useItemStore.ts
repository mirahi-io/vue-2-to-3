import { inject, provide, ref } from 'vue'
import { CART, CART_KEY } from './constants'

export const provideStore = () => {
  const amount = ref(0)

  const set = (v: number) => amount.value = v

  provide<CART>(CART_KEY, { amount, set })
}

export const useItemStore = () => {
  const { amount, set } = inject<CART>(CART_KEY) as CART

  return { amount, set }
}



