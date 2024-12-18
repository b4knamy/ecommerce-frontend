import { MutableRefObject } from 'react';
import { ProductDataType } from '../../navigation.type';

export type ProductsType = {
  products: ProductDataType[];
  reference: MutableRefObject<HTMLDivElement | null>;
};
