import { Dispatch, SetStateAction, useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { FaCheck } from 'react-icons/fa';
import styled from 'styled-components';
import { flexBoxOnlyDirection } from '../../../../settings/styles/utils';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { CartItemsType } from '../hooks';

type CartOptionsProps = {
  setShoppingList: Dispatch<SetStateAction<CartItemsType[]>>;
  removeCart: (slug: string) => void;
  name: string;
  amount: string;
  slug: string;
};

export default function CartOptions({
  removeCart,
  setShoppingList,
  name,
  amount,
  slug,
}: CartOptionsProps) {
  const [isAdded, setIsAdded] = useState(false);
  return (
    <Container>
      <button
        onClick={() => {
          if (isAdded) {
            setShoppingList((prevList) =>
              prevList.filter((cart) => cart.slug !== slug),
            );
            setIsAdded(false);
          } else {
            setShoppingList((prevList) => [
              ...prevList,
              { name, amount, slug },
            ]);
            setIsAdded(true);
          }
        }}
        className={isAdded ? 'cart-confirm' : ''}
      >
        {isAdded ? <IoMdCheckmarkCircleOutline /> : <FaCheck />}
      </button>
      <div></div>
      <button onClick={() => removeCart(slug)} className="cart-trash">
        <HiOutlineTrash />
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 150px;
  height: 100%;
  ${flexBoxOnlyDirection('row')}
  position: absolute;
  right: 0;

  button {
    width: 50%;
    svg {
      transform: scale(2);
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryGreen};
    }
    transition: all 300ms ease-out;
  }
  div {
    width: 1px;
    height: 100%;
  }

  .cart-trash:hover {
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryRed,
        color: theme.colors.primaryLight,
      };
    }}
  }

  .cart-confirm {
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryGreen,
        color: theme.colors.primaryLight,
      };
    }}
    svg {
      transform: scale(3) !important;
    }
  }

  @media (min-width: 768px) and (max-width: 1200px) {
    width: 150px;
  }
  @media (min-width: 0px) and (max-width: 767px) {
    width: 120px;
  }
`;
