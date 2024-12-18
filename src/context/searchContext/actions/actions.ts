import { DispatchSearchType, searchPayloadWithRemover } from './actions.type';

export const addFilter1 = 'ADD_FILTER_1';
export const addFilter2 = 'ADD_FILTER_2';
export const addFilter3 = 'ADD_FILTER_3';
export const addOrder = 'ADD_ORDER';
export const addAmountMax = 'ADD_AMOUNT_MAX';
export const addAmountMin = 'ADD_AMOUNT_MIN';
export const addFilter4 = 'ADD_FILTER_4';
export const addFilter5 = 'ADD_FILTER_5';
export const resetFilters = 'RESET';

export const searchActions = (dispatch: DispatchSearchType) => {
  return {
    addFilter1: (payload: searchPayloadWithRemover) => {
      dispatch({ type: addFilter1, payload });
    },
    addFilter2: (payload: searchPayloadWithRemover) => {
      dispatch({ type: addFilter2, payload });
    },
    addFilter3: (payload: searchPayloadWithRemover) => {
      dispatch({ type: addFilter3, payload });
    },
    addFilter4: (payload: searchPayloadWithRemover) => {
      dispatch({ type: addFilter4, payload });
    },
    addFilter5: (payload: searchPayloadWithRemover) => {
      dispatch({ type: addFilter5, payload });
    },
    addOrder: (payload: string) => {
      dispatch({ type: addOrder, payload });
    },
    addAmountMax: (payload: string) => {
      dispatch({ type: addAmountMax, payload });
    },
    addAmountMin: (payload: string) => {
      dispatch({ type: addAmountMin, payload });
    },
    applyReset: () => {
      dispatch({ type: resetFilters });
    },
  };
};
