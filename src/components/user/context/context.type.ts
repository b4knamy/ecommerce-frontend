import { RelatedInfoType } from '../../glasses/index.type';
import { ImageType } from '../../home/components/pricing/pricing.type';

export type userContextDataType = {
  data: UserProfileContextProps;
  postChangePassword: (data: postChangePasswordArgs) => Promise<Response>;
  postUpdateData: (
    data: postUpdateDataArgs,
    currentSlug: string,
  ) => Promise<Response>;
  postResetCode: () => Promise<Response>;
  deleteUser: (slug: string) => void;
};

export type postUpdateDataArgs = {
  first_name: string;
  last_name: string;
  email: string;
  zipcode: string;
  address: string;
  complement: string;
};

export type postChangePasswordArgs = {
  reset_code: string;
  password: string;
  current_password: string;
};

export type UserInformationProfile = {
  address: string | null;
  complement: string | null;
  zipcode: string | null;
  email: string;
  first_name: string;
  last_name: string;
  slug: string;
};

export interface UserProfileContextProps extends UserInformationProfile {
  address: string | null;
  complement: string | null;
  zipcode: string | null;
  email: string;
  first_name: string;
  last_name: string;
  payment_orders: PaymentOrderProps[];
}

export type PaymentOrderProps = {
  created_at: string;
  is_installments: boolean;
  payment_method: string;
  order: OrderItemProps[];
  order_status: string;
  order_number: string;
  amount: number;
};

export type OrderItemProps = {
  color: RelatedInfoType;
  product: OrderProductProps;
  quantitaty: number;
};

export type OrderProductProps = {
  currentQTD: number;
  amount: string;
  color: RelatedInfoType[];
  id: number;
  images: ImageType;
  installments_amount: string;
  installments_count: number;
  name: string;
  quantitaty: number;
  warranty: string;
  slug: string;
};
