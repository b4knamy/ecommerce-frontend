import { ImageType } from '../../../home/components/pricing/pricing.type';

export interface SearchNavContentInterface {
  products: ProductDataType[];
  count: number;
  last: number;
  page: number;
}

export type ProductDataType = {
  id: number;
  is_promo: boolean;
  name: string;
  amount: number;
  installments_amount: number;
  installments_count: number;
  slug: string;
  images: ImageType;
  final_amount: number;
  discount: number;
};
