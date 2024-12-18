import { NavigateFunction } from 'react-router-dom';
import { ShoppingListProps } from '../../../payment';
import { Container } from './checkout.style';

export default function SubTotalCheckout({
  length,
  amount,
  shoppingContext,
  navigate,
  closeSideBar,
}: props) {
  return (
    <Container>
      <div></div>
      <div>
        <span>Items selecionados: </span>
        <span>{length}</span>
      </div>
      <div>
        <span>Subtotal: </span>
        <span>R$ {amount}</span>
      </div>
      <hr />
      <div
        onClick={() => {
          if (length > 0) {
            navigate('/pagamento/checkin', {
              state: { shoppingList: shoppingContext },
            });
            closeSideBar();
          }
        }}
      >
        <button>Checkout</button>
      </div>
    </Container>
  );
}

type props = {
  length: number;
  amount: string;
  shoppingContext: ShoppingListProps;
  navigate: NavigateFunction;
  closeSideBar: () => void;
};
