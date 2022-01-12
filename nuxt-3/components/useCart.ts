import { Ref } from 'vue'
import { Product } from "~~/types";

const round = (n, decimals = 2) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);


interface CartState {
  [name: string]: number
}

interface CartData {
  state: Ref<CartState>,
  reset: () => void,
  addItem: (name: string, quantity?: number) => void
  subtractItem: (name: string, quantity?: number) => void
  totalPrice: Ref<number>
  totalAmount: Ref<number>
}

const populate = (items: Product[]) => items.reduce((items, item) => ({
  ...items,
  [item.name]: 0
}), {} as CartState)

export default (items: Product[] = []): CartData => {
  const initialState = useState('init', () => items)

  const state = useState('cart', () => {
    return populate(items)
  })

  watch(items, (newItems) => {
    populate(newItems)
    initialState.value = newItems
  })

  const totalPrice = computed(() => {
    return round(initialState.value.reduce((total, item) => {
      return total + item.price * state.value[item.name]
    }, 0))
  })

  const totalAmount = computed(() => {
    return Object.values(state.value).reduce((total, amount) => total + amount, 0)
  })

  const reset = () => {
    state.value = populate(initialState.value)
  }

  const addItem = (name: string, quantity = 1) => {
    const maxAmount = items.find(item => item.name === name)?.maxAmount

    if (!maxAmount) return

    state.value[name] = Math.min(state.value[name] + quantity, maxAmount)
  }

  const subtractItem = (name: string, quantity = 1) => {
    state.value[name] = Math.max(state.value[name] - quantity, 0)
  }

  return {
    state,
    reset,
    addItem,
    subtractItem,
    totalPrice,
    totalAmount
  }
}