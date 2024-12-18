import { SearchNavContentInterface } from '../../../components/search/components/navigation/navigation.type';

export interface searchInitState {
  filter_1: string[];
  filter_2: string[];
  filter_3: string[];
  filter_4: string[];
  filter_5: string[];
  order: string[];
  amount: searchAmountType[];
}

type searchAmountType = {
  min: string;
  max: string;
};

export type ValueProviderType = {
  getProducts: (query: string) => void;
  isLoading: boolean;
  content: SearchNavContentInterface;
  filter: searchInitState;
};
