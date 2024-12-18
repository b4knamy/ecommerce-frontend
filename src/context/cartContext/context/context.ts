import { useContext } from 'react'
import { CartContext } from './provider'
import { cartInitStateType } from './context.type'

export const cartInitState: cartInitStateType = {
  products: [],
  runAnimation: false
}


export default function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCartContext must be inside CartContextProvider!")
  }

  return context
}
