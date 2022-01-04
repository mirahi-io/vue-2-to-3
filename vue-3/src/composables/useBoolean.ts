import { ref } from 'vue'

export const useBoolean = (initialValue: boolean) => {
  const bool = ref(initialValue)

  const toggle = () => bool.value = !bool.value
  const set = (value: boolean) => bool.value = value
  const on = () => bool.value = true
  const off = () => bool.value = false

  return {
    bool,
    toggle,
    set,
    on,
    off,
  }
}