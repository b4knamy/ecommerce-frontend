import { ChangeEvent, useState } from 'react';
import * as S from './amount.style';
import { ByAmountProps } from './amount.type';
export default function ByAmount({
  setterAmount,
  id,
  data,
  placeholder,
  initValue,
}: ByAmountProps) {
  const [currentValue, setCurrentValue] = useState(initValue);

  function valueHandler(e: ChangeEvent<HTMLInputElement>) {
    if (e.target instanceof HTMLInputElement) {
      const value: string = e.target.value;
      setCurrentValue(value);
      if (data === 'min') {
        setterAmount(value, true);
      } else {
        setterAmount(value, false);
      }
    }
  }

  return (
    <S.Content>
      <input
        id={id}
        onChange={valueHandler}
        type="number"
        data-testid={`search-${data}-amount`}
        placeholder={placeholder}
        value={currentValue}
      />
    </S.Content>
  );
}
