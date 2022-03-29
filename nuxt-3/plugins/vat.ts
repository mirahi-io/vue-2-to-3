const round = (n: number, decimals = 2) =>
  Number(`${Math.round(Number(`${n}e${decimals}`))}e-${decimals}`);


const getVAT = (price: number, rate = 0.21) => {
  const taxAmount = round(price - price / (1 + rate))
  const taxLess = round(price - taxAmount)

  return {
    taxAmount,
    taxLess
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      vat: getVAT
    }
  }
})