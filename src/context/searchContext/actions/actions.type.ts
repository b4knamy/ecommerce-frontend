import { Dispatch } from 'react';
export type searchPayloadWithRemover = {
  value: string;
  isRemover: boolean;
};

export type SearchActionsType =
  | {
      type: 'ADD_FILTER_1';
      payload: searchPayloadWithRemover;
    }
  | {
      type: 'ADD_FILTER_2';
      payload: searchPayloadWithRemover;
    }
  | {
      type: 'ADD_FILTER_3';
      payload: searchPayloadWithRemover;
    }
  | {
      type: 'ADD_AMOUNT_MAX';
      payload: string;
    }
  | {
      type: 'ADD_AMOUNT_MIN';
      payload: string;
    }
  | {
      type: 'ADD_ORDER';
      payload: string;
    }
  | {
      type: 'ADD_FILTER_4';
      payload: searchPayloadWithRemover;
    }
  | {
      type: 'ADD_FILTER_5';
      payload: searchPayloadWithRemover;
    }
  | {
      type: 'RESET';
    };

export type DispatchSearchType = Dispatch<SearchActionsType>;

export type ActionsFunctionsType = {
  addFilter1: (payload: searchPayloadWithRemover) => void;
  addFilter2: (payload: searchPayloadWithRemover) => void;
  addFilter3: (payload: searchPayloadWithRemover) => void;
  addFilter4: (payload: searchPayloadWithRemover) => void;
  addFilter5: (payload: searchPayloadWithRemover) => void;
  addOrder: (payload: string) => void;
  addAmountMax: (payload: string) => void;
  addAmountMin: (payload: string) => void;
  applyReset: (payload: string) => void;
};
export type ActionsProps = {
  actions: ActionsFunctionsType;
};
