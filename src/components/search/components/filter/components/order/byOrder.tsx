import * as S from '../components.style';
import { ByOrderProps } from './order.type';

export default function ByOrder({
  setterOrder,
  testName,
  id,
  order,
  name,
  isSelected,
}: ByOrderProps) {
  return (
    <S.Content>
      <input
        onClick={() => {
          setterOrder(order);
        }}
        type="radio"
        name="filter-order"
        id={`filter-order-${id}`}
        data-id={order}
        defaultChecked={isSelected}
        data-testid={testName}
      />
      <label htmlFor={`filter-order-${id}`}>{name}</label>
    </S.Content>
  );
}
