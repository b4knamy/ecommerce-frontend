import { Dispatch } from 'react';
import {
  CartActionFunctionsType,
  CartActionType,
} from '../actions/actions.type';
import { ImageType } from '../../../components/home/components/pricing/pricing.type';

export type CartContextType = {
  cart: cartInitStateType;
  actions: CartActionFunctionsType;
};

export type cartInitStateType = {
  products: GlassesCartItemsType[];
  runAnimation: boolean;
};

export type CartDispatchActions = Dispatch<CartActionType>;

export type GlassesCartItemsType = {
  name: string;
  amount: string;
  slug: string;
  images: ImageType | null;
};
