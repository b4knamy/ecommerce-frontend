import { ActionsFunctionsType } from '../../../../../../context/searchContext/actions/actions.type';
import { FilterAmountType } from '../../filter.type';

export type AmountContainerProps = {
  data: FilterAmountType;
  actions: ActionsFunctionsType;
  params: URLSearchParams;
};

export type InitAmountType = {
  min: string;
  max: string;
};

export type ByAmountProps = {
  setterAmount: (value: string, isMin: boolean) => void;
  id: string;
  data: string;
  placeholder: string;
  initValue: string;
};
