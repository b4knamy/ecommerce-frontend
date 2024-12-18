import { AddCartPayload } from '../../../../../context/cartContext/actions/actions.type';
import { ImageType } from '../pricing.type';

export type PriceTableProps = {
  name: string;
  images: ImageType | null;
  amount: number | string;
  installments_amount: number;
  installments_count: number;
  is_promo: boolean;
  slug: string;
  discount: number;
  final_amount: number;
  addItem: (payload: AddCartPayload) => void;
  defaultImageUrl: string;
  domain: string;
};
