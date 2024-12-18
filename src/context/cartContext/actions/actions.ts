import { CartDispatchActions } from '../context/context.type'
import { AddCartPayload } from './actions.type'

export const addItem = "ADD"
export const removeItem = "REMOVE"
export const openSideBar = "OPEN"
export const closeSideBar = "CLOSE"


export default function cartActions(dispatch: CartDispatchActions) {
  return {
    addItem: (payload: AddCartPayload) => {
      dispatch({ type: addItem, payload})
    },
    removeItem: (payload: string) => {
      dispatch({ type: removeItem, payload})
    },
    openSideBar: () => {
      dispatch({ type: openSideBar })
    },
    closeSideBar: () => {
      dispatch({ type: closeSideBar })
    }
  }
}
