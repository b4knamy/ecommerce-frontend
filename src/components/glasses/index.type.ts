import PricingData from '../home/components/pricing/pricing.type';
import { GlassesDescriptionType } from './components/description/description.type';
import { GlassesImageViewType } from './components/images/image.type';
import { GlassesInformationType } from './components/information/information.type';

// @ts-ignore
export interface GlassesProfileType
  extends GlassesImageViewType,
    GlassesInformationType,
    GlassesDescriptionType {
  id: number;
  quantitaty: number;
  discount: number;
  slug: string;
  is_promo: boolean;
  final_amount: number;
}
export type GlassesProfileDataAPI = {
  glasses: GlassesProfileType | null;
  relateds_glasses: PricingData[];
  ratings: GlassesRatingsType[];
};
export type GlassesRatingsType = {
  rating: number;
  count: number;
};

export type RelatedInfoType = {
  id: number;
  name: string;
  slug: string;
  css_color?: string;
};

export type GlassesImagesType = {
  id: number;
  url: string;
  description: string;
  order: number;
  glasses: number;
} | null;
