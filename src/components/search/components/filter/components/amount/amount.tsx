import { useEffect, useState } from 'react';
import { AmountContainerProps, InitAmountType } from './amount.type';
import ByAmount from './byAmount';
import FilterShape from '../default';
import Loading from '../../../../../../animations/productsLoading/loading';

const ByAmountContainer = ({ data, actions, params }: AmountContainerProps) => {
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState<InitAmountType>({
    min: '',
    max: '',
  });

  useEffect(() => {
    let max = params.get('max');
    let min = params.get('min');

    if (min) {
      actions.addAmountMin(min);
    } else {
      min = '';
    }

    if (max) {
      actions.addAmountMax(max);
    } else {
      max = '';
    }

    setAmount({
      max: max,
      min: min,
    });
    setLoading(false);
    /* eslint-disable-next-line */
  }, []);

  if (loading) {
    return <Loading />;
  }

  const setterAmount = (value: string, isMin: boolean): void => {
    if (isMin) {
      actions.addAmountMin(value);
    } else {
      actions.addAmountMax(value);
    }
  };

  return (
    <FilterShape name="Preço" isAmount={true}>
      <ByAmount
        key={1}
        id="min-amount-value"
        data="min"
        placeholder={data.min}
        setterAmount={setterAmount}
        initValue={amount.min}
      />
      <ByAmount
        key={2}
        id="max-amount-value"
        data="max"
        placeholder={data.max}
        setterAmount={setterAmount}
        initValue={amount.max}
      />
    </FilterShape>
  );
};

export default ByAmountContainer;
