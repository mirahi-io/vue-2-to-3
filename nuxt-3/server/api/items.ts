import { Product } from "~~/types"

const items = [
  {
    name: 'oranges',
    maxAmount: 7,
    price: 2.1,
    logo: '🍊'
  },
  {
    name: 'apples',
    maxAmount: 13,
    price: 1.4,
    logo: '🍏'
  },
  {
    name: 'bananas',
    maxAmount: 10,
    price: 1.9,
    logo: '🍌'
  },
  {
    name: 'watermelons',
    maxAmount: 5,
    price: 4.1,
    logo: '🍉'
  }
]

export default async (req, res): Promise<Product[]> => {
  return items
}

