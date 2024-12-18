import { MutableRefObject } from 'react';
import { GlassesImagesType, RelatedInfoType } from '../../index.type';

export type GlassesInformationType = {
  name: string;
  amount: string;
  installments_amount: string;
  installments_count: number;
  color: RelatedInfoType[];
  slug: string;
  is_promo: boolean;
  discount: number;
  final_amount: number;
  images: GlassesImagesType;
};

export type GlassesColorsType = {
  colorRef: MutableRefObject<HTMLSelectElement | null>;
  colors: RelatedInfoType[];
};
