import ByOrder from './byOrder';
import { useEffect, useState } from 'react';
import { ByOrderContainerProps } from './order.type';
import FilterShape from '../default';

export default function ByOrderContainer({
  relatedAction,
  params,
}: ByOrderContainerProps) {
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState<string>('');

  useEffect(() => {
    if (params) {
      relatedAction(params);
      setOrder(params);
    }
    setLoading(false);
    /* eslint-disable-next-line */
  }, []);

  if (loading) {
    return <h1>carregando</h1>;
  }

  const setterOrder = (value: string): void => {
    relatedAction(value);
  };

  return (
    <FilterShape name="Ordenação">
      <>
        <ByOrder
          id={1}
          setterOrder={setterOrder}
          testName="search-order-random"
          order="RAND"
          name="Aleatório"
          isSelected={false}
        />
        <ByOrder
          id={2}
          setterOrder={setterOrder}
          testName="search-order-higher"
          order="DESC"
          name="Maior preço"
          isSelected={order === 'DESC'}
        />
        <ByOrder
          id={3}
          setterOrder={setterOrder}
          testName="search-order-lower"
          order="ASC"
          name="Menor preço"
          isSelected={order === 'ASC'}
        />
      </>
    </FilterShape>
  );
}
