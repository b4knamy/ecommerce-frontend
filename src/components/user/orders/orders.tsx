import { useUserProfileContext } from '../context/context';
import { OrderItemProps } from '../context/context.type';
import { UserPageProps } from '../profile/profile';
import {
  OrdersContainer,
  OrderContainer,
  OrderDetails,
  OrderProductsContainer,
} from './orders.style';
import OrderItemView from './item';
import { NoDataExists } from '../../search/components/navigation/components/products/products';
import useSettings from '../../../context/settingsContext/context';
const UserOrders = ({ isCurrent }: UserPageProps) => {
  const display = isCurrent ? 'flex' : 'none';
  const { data } = useUserProfileContext();
  const { settings } = useSettings();
  const { payment_orders } = data;
  return (
    <OrdersContainer $display={display}>
      {payment_orders.length === 0 ? (
        <NoDataExists text="Você ainda não possui pedidos" />
      ) : (
        payment_orders.map((payment_order, index) => {
          return (
            <PaymentOrderContainer
              key={index}
              orders={payment_order.order}
              created_at={payment_order.created_at}
              order_number={payment_order.order_number}
              order_status={payment_order.order_status}
              amount={payment_order.amount}
              defaultImageUrl={settings.default_image_url}
            />
          );
        })
      )}
    </OrdersContainer>
  );
};

const PaymentOrderContainer = ({
  orders,
  created_at,
  order_number,
  order_status,
  amount,
  defaultImageUrl,
}: PaymentOrderContainerProps) => {
  const { settings } = useSettings();
  return (
    <OrderContainer>
      <OrderDetails>
        <div>
          <span>Data:</span>
          <span>{created_at}</span>
        </div>
        <div>
          <span>Total:</span>
          <span>R${amount / 100}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>{order_status}</span>
        </div>
        <div>
          <span>Pedido:</span>
          <span>{order_number}</span>
        </div>
      </OrderDetails>
      <OrderProductsContainer>
        {orders.map((order, index) => {
          return (
            <OrderItemView
              key={index}
              name={order.product.name}
              quantitaty={order.quantitaty}
              amount={order.product.amount}
              slug={order.product.slug}
              imageUrl={
                settings.site_domain +
                (order.product.images?.url || settings.default_image_url)
              }
              color={order.color?.css_color || ''}
              comeFrom="profile"
              defaultImageUrl={defaultImageUrl}
            />
          );
        })}
      </OrderProductsContainer>
    </OrderContainer>
  );
};

type PaymentOrderContainerProps = {
  orders: OrderItemProps[];
  created_at: string;
  order_number: string;
  order_status: string;
  amount: number;
  defaultImageUrl: string;
};
export default UserOrders;
