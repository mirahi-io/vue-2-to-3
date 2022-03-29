const curry = (fn: Function, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

export default defineNuxtPlugin(() => {
  return {
    provide: {
      curry
    }
  }
})