import { useEffect, useState } from 'react';
import { CartAnimationContainer, CartContainer } from './cartAdd.style';
import useCartContext from '../../context/cartContext/context/context';
import { CiCircleCheck } from 'react-icons/ci';
import { AnimatePresence } from 'framer-motion';

export default function CartAddedAnimation() {
  const { cart } = useCartContext();
  const [previousProductsLengthKeeper, setPreviousProductsLengthKeeper] =
    useState(cart.products.length);
  const [cartAddedList, setCartAddedList] = useState<string[]>([]);

  useEffect(() => {
    if (
      cart.products.length > previousProductsLengthKeeper &&
      cart.runAnimation
    ) {
      const productName = cart.products[cart.products.length - 1].name;
      setCartAddedList((prev) => {
        return [...prev, productName];
      });
    }

    setPreviousProductsLengthKeeper(cart.products.length);

    /* eslint-disable-next-line */
  }, [cart.products.length]);

  useEffect(() => {
    if (cart.runAnimation && cartAddedList.length > 0) {
      const timer = setTimeout(() => {
        setCartAddedList((prev) => {
          const updatedCartAddedList = [...prev];
          updatedCartAddedList.pop();
          return updatedCartAddedList;
        });
      }, 3000);

      return () => clearTimeout(timer);
    }
    /* eslint-disable-next-line */
  }, [cartAddedList.length]);

  // if (cartAddedList.length === 0) return null;

  return (
    <CartContainer>
      <AnimatePresence>
        {/* @ts-ignore */}
        {cartAddedList.map((productName, index) => {
          return <CartAnimation key={index + 1} />;
        })}
        {/* <CartAnimation /> */}
      </AnimatePresence>
    </CartContainer>
  );
}
const variants = {
  open: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 200 },
};
function CartAnimation() {
  return (
    <CartAnimationContainer
      variants={variants}
      animate="open"
      initial="hidden"
      exit="hidden"
      layout
    >
      <span>Adicionado ao carrinho com sucesso!</span>

      <CiCircleCheck />
    </CartAnimationContainer>
  );
}
