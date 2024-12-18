import { useLocation, useNavigate } from 'react-router-dom';
import { CheckOutProductType, ShoppingListProps } from '.';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import fetchShoppingGlasses from './helpers';

type PaymentHookType = {
  isLoading: boolean;
  listProducts: CheckOutProductType[];
  setListProducts: Dispatch<SetStateAction<CheckOutProductType[]>>;
  setLogUserIn: Dispatch<SetStateAction<boolean>>;
  logUserIn: boolean;
  finalAmount: string;
  returnURL: string;
  onChangeHandler: (
    label: 'color' | 'QTD',
    index: number,
  ) => (e: ChangeEvent<HTMLSelectElement>) => void;
  onDeleteHandler: (id: number) => () => void;
};

export default function usePaymentHook(url: string): PaymentHookType {
  const { state } = useLocation();
  const navigate = useNavigate();
  const shoppingContext: ShoppingListProps = state.shoppingList || null;
  const [listProducts, setListProducts] = useState<CheckOutProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [logUserIn, setLogUserIn] = useState(false);

  if (!shoppingContext) {
    // @ts-ignore-next-line
    return navigate('/', { replace: true });
  }

  const { items, returnURL } = shoppingContext;

  useEffect(() => {
    try {
      fetchShoppingGlasses(String(items), url).then(async (response) => {
        if (!response) {
          return navigate('/');
        }
        const data: CheckOutProductType[] = await response.json();
        const initListProduct = data.map((each) => {
          return { ...each, selectedColor: each.color[0].id };
        });
        setListProducts(initListProduct);
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const finalAmount = listProducts
    .reduce(
      (value, product) => Number(product.amount) * product.currentQTD + value,
      0,
    )
    .toFixed(2);

  const onChangeHandler = useCallback(
    (label: 'color' | 'QTD', index: number) =>
      (e: ChangeEvent<HTMLSelectElement>) => {
        setListProducts((prev) => {
          const value = Number(e.target.value);
          const updatedProduct = [...prev];

          if (label === 'color') {
            updatedProduct[index] = {
              ...updatedProduct[index],
              selectedColor: value,
            };
          } else {
            updatedProduct[index] = {
              ...updatedProduct[index],
              currentQTD: value,
            };
          }
          return updatedProduct;
        });
      },
    [],
  );

  const onDeleteHandler = useCallback(
    (id: number) => () => {
      setListProducts((prev) => {
        return prev.filter((value) => id !== value.id);
      });
    },
    [],
  );
  return {
    finalAmount,
    isLoading,
    listProducts,
    returnURL,
    setListProducts,
    setLogUserIn,
    logUserIn,
    onChangeHandler,
    onDeleteHandler,
  };
}

export type CheckOutDataType = {
  productID: number;
  colorID: number;
};
