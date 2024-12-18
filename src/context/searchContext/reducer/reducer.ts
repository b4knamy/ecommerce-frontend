import {
  addOrder,
  addAmountMax,
  addAmountMin,
  addFilter1,
  addFilter5,
  addFilter4,
  addFilter3,
  addFilter2,
  resetFilters,
} from '../actions/actions';
import { searchInitState } from '../context/context.type';
import { SearchActionsType } from '../actions/actions.type';

export const searchReducer = (
  state: searchInitState,
  actions: SearchActionsType,
): searchInitState => {
  const actionType = actions.type;

  if (actionType === addAmountMax) {
    state.amount[0].max = actions.payload;
    return state;
  }

  if (actionType === addAmountMin) {
    state.amount[0].min = actions.payload;
    return state;
  }

  if (actionType === addFilter1) {
    const { value, isRemover } = actions.payload;
    if (isRemover) {
      const position = state.filter_1.indexOf(value);
      state.filter_1.splice(position, 1);
    } else {
      state.filter_1.push(value);
    }
    return state;
  }

  if (actionType === addFilter2) {
    const { value, isRemover } = actions.payload;
    if (isRemover) {
      const position = state.filter_2.indexOf(value);
      state.filter_2.splice(position, 1);
    } else {
      state.filter_2.push(value);
    }
    return state;
  }
  if (actionType === addFilter3) {
    const { value, isRemover } = actions.payload;
    if (isRemover) {
      const position = state.filter_3.indexOf(value);
      state.filter_3.splice(position, 1);
    } else {
      state.filter_3.push(value);
    }
    return state;
  }

  if (actionType === addFilter4) {
    const { value, isRemover } = actions.payload;
    if (isRemover) {
      const position = state.filter_4.indexOf(value);
      state.filter_4.splice(position, 1);
    } else {
      state.filter_4.push(value);
    }
    return state;
  }

  if (actionType === addFilter5) {
    const { value, isRemover } = actions.payload;
    if (isRemover) {
      const position = state.filter_5.indexOf(value);
      state.filter_5.splice(position, 1);
    } else {
      state.filter_5.push(value);
    }
    return state;
  }

  if (actionType === addOrder) {
    if (actions.payload === 'RAND') {
      state.order.pop();
    } else {
      state.order[0] = actions.payload;
    }
    return state;
  }

  if (actionType === resetFilters) {
    return {
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
  }

  return state;
};
