
import { GlassesCartItemsType } from '../context/context.type'

export type CartActionType =
  {
    type: "ADD",
    payload: AddCartPayload
  }
  |
  {
    type: "REMOVE",
    payload: string
  }
  |
  {
    type: "OPEN"
  }
  |
  {
    type: "CLOSE"
  }

export type AddCartPayload = {
  data: GlassesCartItemsType | GlassesCartItemsType[]
  isFromLocalStorage: boolean
}



export type CartActionFunctionsType = {
  addItem: (payload: AddCartPayload) => void
  removeItem: (payload: string) => void
  openSideBar: () => void
  closeSideBar: () => void
}


