import {
  addItem,
  closeSideBar,
  openSideBar,
  removeItem,
} from '../actions/actions';
import { CartActionType } from '../actions/actions.type';
import { cartInitStateType } from '../context/context.type';

export function CartReducer(
  state: cartInitStateType,
  actions: CartActionType,
): cartInitStateType {
  const action = actions.type;

  if (action === addItem) {
    const { data, isFromLocalStorage } = actions.payload;

    if (Array.isArray(data)) {
      if (isFromLocalStorage) {
        return { ...state, products: data };
      }
    } else {
      if (state.products.find((obj) => obj.slug === data.slug)) {
        return state;
      }
      localStorage.setItem(`cart-${data.slug}`, JSON.stringify(data));
      return {
        ...state,
        products: [...state.products, data],
        runAnimation: true,
      };
    }
  }

  if (action === removeItem) {
    localStorage.removeItem(`cart-${actions.payload}`);
    const newState = {
      ...state,
      products: state.products.filter((item) => item.slug !== actions.payload),
    };
    return newState;
  }

  if (action === openSideBar) {
    const container = document.querySelector("[data-content='cart-side-bar']");
    if (container instanceof HTMLDivElement) {
      container.classList.add('open-cart');
    }
  }

  if (action === closeSideBar) {
    const container = document.querySelector("[data-content='cart-side-bar']");
    if (container instanceof HTMLDivElement) {
      container.classList.remove('open-cart');
    }
  }
  return state;
}
