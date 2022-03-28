import { defineStore } from 'pinia'

export const useItemStore = defineStore('item', {
  state: () => {
    return { item: 0 }
  },
  actions: {
    increment() {
      this.item++
    },
    decrement() {
      this.item--
    },
    reset() {
      this.item = 0
    }
  },
})