import { useLocation } from 'react-router-dom';
import useCartContext from '../../../context/cartContext/context/context';
import { useCallback, useState } from 'react';
import { ShoppingListProps } from '../../payment';

export type CartItemsType = {
  name: string;
  amount: string;
  slug: string;
};

export default function useCartSideBar() {
  const { actions, cart } = useCartContext();
  const { pathname, search } = useLocation();
  const [shoppingList, setShoppingList] = useState<CartItemsType[]>([]);
  const removeCart = useCallback((slug: string) => {
    actions.removeItem(slug);
    setShoppingList((prevList) =>
      prevList.filter((cart) => cart.slug !== slug),
    );
  }, []);

  const closeSideBar = () => actions.closeSideBar();

  const totalValue = shoppingList.reduce(
    (value, cart) => Number(cart.amount) + value,
    0,
  );
  const shoppingContext: ShoppingListProps = {
    items: shoppingList.map((item) => item.slug),
    returnURL: pathname + search,
  };

  return {
    cart,
    setShoppingList,
    removeCart,
    totalValue,
    shoppingContext,
    shoppingList,
    closeSideBar,
  };
}
