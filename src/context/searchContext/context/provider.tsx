import { createContext, useEffect, useReducer, useRef } from 'react';
import { searchReducer } from '../reducer/reducer';
import { searchInitialState } from './context';
import { searchActions } from '../actions/actions';
import { ValueProviderType } from './context.type';
import useSearchProvider from './hook';
import { SearchWrapper } from '../../../components/search';
import { useLocation } from 'react-router-dom';

export const SearchContext = createContext<ValueProviderType | undefined>(
  undefined,
);

export type SearchWrapperProps = {
  actions: ReturnType<typeof searchActions>; // Type for actions
};

export const SearchContextProvider = () => {
  const { key } = useLocation();
  const [state, dispatch] = useReducer(searchReducer, searchInitialState);
  const actions = useRef(searchActions(dispatch));
  const { content, getProducts, isLoading } = useSearchProvider();

  useEffect(() => {
    actions.current.applyReset();
  }, [key]);

  const valueProvider: ValueProviderType = {
    getProducts: getProducts,
    content: content,
    isLoading: isLoading,
    filter: state,
  };

  return (
    <SearchContext.Provider value={valueProvider}>
      <SearchWrapper actions={actions.current} />
    </SearchContext.Provider>
  );
};
