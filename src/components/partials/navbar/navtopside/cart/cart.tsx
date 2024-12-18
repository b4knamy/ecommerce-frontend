import { IoCart } from 'react-icons/io5';
import useCartContext from '../../../../../context/cartContext/context/context';
import { Ball, NavCart } from './cart.style';
import { useEffect, useRef, useState } from 'react';

export default function Cart() {
  const { cart, actions } = useCartContext();
  const [isInitial, setIsInitial] = useState(true);
  const [length, setLength] = useState(cart.products.length);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const insertOrDeleteAnimation = (insert: boolean) => {
    if (isInitial) {
      setIsInitial(false);
      return;
    }
    const div = cartRef.current;
    if (insert) {
      div?.classList.add('run-transition');

      const timeOut = setTimeout(() => {
        div?.firstElementChild?.classList.add('increasing-transition');
        div?.classList.remove('run-transition');
      }, 2000);

      return () => clearTimeout(timeOut);
    } else {
      div?.firstElementChild?.classList.remove('increasing-transition');
      div?.classList.remove('run-transition');
    }
  };

  useEffect(() => {
    if (length <= cart.products.length) {
      insertOrDeleteAnimation(true);
    }
    setLength(cart.products.length);
  }, [cart.products.length]);

  return (
    <NavCart title="Carrinho" ref={cartRef}>
      <IoCart
        onClick={() => {
          actions.openSideBar();
          insertOrDeleteAnimation(false);
        }}
      />
      <Ball>
        <span>{length}</span>
      </Ball>
    </NavCart>
  );
}

// TEST: TIME EXPIRATION INFORMATION
// TODO: REACT ICONS HERE
