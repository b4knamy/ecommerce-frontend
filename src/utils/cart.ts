import { ImageType } from '../components/home/components/pricing/pricing.type';
import { AddCartPayload } from '../context/cartContext/actions/actions.type';

export default function createCartObj(
  obj: CartObjectProps,
  isFromLocalStorage = false,
): AddCartPayload {
  return {
    data: {
      name: obj.name,
      amount: String(obj.amount),
      slug: obj.slug,
      images: obj.images,
    },
    isFromLocalStorage: isFromLocalStorage,
  };
}

export type CartObjectProps = {
  name: string;
  slug: string;
  amount: string;
  images: ImageType | null;
};
