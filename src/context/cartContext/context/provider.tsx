import { createContext, useEffect, useReducer, useRef, useState } from 'react';
import { CartContextType, GlassesCartItemsType } from './context.type';
import cartActions from '../actions/actions';
import { CartReducer } from '../reducer/reducer';
import { ChildrenComponentNode } from '../../../components/helpers/types/types';
import { cartInitState } from './context';
import { AddCartPayload } from '../actions/actions.type';
import Loading from '../../../animations/productsLoading/loading';

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export function CartContextProvider({ children }: ChildrenComponentNode) {
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useReducer(CartReducer, cartInitState);
  const actions = useRef(cartActions(dispatch));

  useEffect(() => {
    const initialCartData: GlassesCartItemsType[] = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);

      if (key && key.startsWith('cart-')) {
        const item = localStorage.getItem(key);
        if (item) {
          initialCartData.push(JSON.parse(item));
        }
      }
    }

    if (initialCartData.length > 0) {
      const newObj: AddCartPayload = {
        data: initialCartData,
        isFromLocalStorage: true,
      };
      actions.current.addItem(newObj);
    }

    setIsLoading(false);
    // GETTING ITEMS IF IT IS ON LOCAL STORAGE.
  }, []);

  if (isLoading) {
    return <Loading class="context-loading" />;
  }
  // TODO: MAKE A PAGE LOADING ANIMATION FOR THATS OCASSIONS

  const valueProvider: CartContextType = {
    cart: state,
    actions: actions.current,
  };

  return (
    <CartContext.Provider value={valueProvider}>
      {children}
    </CartContext.Provider>
  );
}
