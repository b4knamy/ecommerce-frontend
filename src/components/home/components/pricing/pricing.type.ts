import { PriceTableProps } from './pricetable/pricetable.type';

export type ImageType = {
  id: number;
  url: string;
  description: string;
  order: number;
  glasses: number;
};
export default interface PricingData extends PriceTableProps {
  id: number;
}

export type PricingProps = {
  data: PricingData[];
  page: number;
  hasNext: boolean;
};
