import { watch } from 'vue'

export const useSync = <T extends object>(values: [T, T], setters: [Function, Function]) => {
  const [first, second] = values
  const [firstSetter, secondSetter] = setters

  watch(first, (newVal) => firstSetter(newVal))
  watch(second, (newVal) => secondSetter(newVal))
}