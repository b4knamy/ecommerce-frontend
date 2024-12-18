import { useContext } from 'react';
import { searchInitState } from './context.type';
import { SearchContext } from './provider';

export const searchInitialState: searchInitState = {
  filter_1: [],
  filter_2: [],
  filter_3: [],
  filter_4: [],
  filter_5: [],
  order: [],
  amount: [
    {
      min: '',
      max: '',
    },
  ],
};

export default function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw Error('useSearchContext must be inside the SearchContextProvider!');
  }

  return context;
}
