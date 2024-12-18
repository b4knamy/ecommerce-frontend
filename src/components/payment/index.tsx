import { useNavigate } from 'react-router-dom';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import ProductView from './view/view';
import { PaymentContainer, ProductViewContainer } from './index.style';
import { ImageType } from '../home/components/pricing/pricing.type';
import PaymentCheckout from './checkout/checkout';
import usePaymentHook from './hook';
import useAuthContext from '../../context/authContext/context/context';
import { Auth } from '../account/partials/account';
import {
  QueryData,
  QueryFields,
} from '../partials/navbar/navtopside/search/data/data.style';
import Loading from '../../animations/productsLoading/loading';
import useSettings from '../../context/settingsContext/context';
const Payment = () => {
  const { api } = useSettings();
  const {
    finalAmount,
    isLoading,
    listProducts,
    logUserIn,
    setLogUserIn,
    onChangeHandler,
    onDeleteHandler,
  } = usePaymentHook(api.payment_products);
  const { user } = useAuthContext();
  const { settings } = useSettings();
  const navigate = useNavigate();

  const navigateHandler = (slug: string) => {
    return navigate('/oculos/' + slug);
  };

  return (
    <PaymentContainer>
      {isLoading ? (
        <Loading />
      ) : (
        !user.isAuthenticated &&
        logUserIn && (
          <Auth
            foreignSetterHandler={() => {
              setLogUserIn(false);
            }}
            mode="login"
          ></Auth>
        )
      )}
      {listProducts.length === 0 ? (
        <div className="back-home">
          <h1 onClick={() => navigate('/')}>Voltar</h1>
        </div>
      ) : (
        <ProductViewContainer>
          <QueryData $mode="checkout">
            <QueryFields $mode="checkout">
              <span>Produto</span>
              <span>Cor</span>
              <span>QTD</span>
              <span>Preço</span>
            </QueryFields>
            {listProducts.map((product, index) => {
              return (
                <ProductView
                  {...product}
                  index={index}
                  key={index}
                  onChangeHandler={onChangeHandler}
                  onDeleteHandler={onDeleteHandler}
                  navigateHandler={navigateHandler}
                  defaultImageUrl={settings.default_image_url}
                  domain={settings.site_domain}
                />
              );
            })}
          </QueryData>
        </ProductViewContainer>
      )}

      <PaymentCheckout
        finalAmount={finalAmount}
        setLogUserIn={setLogUserIn}
        user={user}
        url={api.checkout}
        listProducts={listProducts}
      />
    </PaymentContainer>
  );
};

export type ShoppingListProps = {
  items: string[];
  returnURL: string;
};
export type MetadataType = {
  id: number;
  name: string;
  slug: string;
};
export type CheckOutProductType = {
  currentQTD: number;
  amount: string;
  color: MetadataType[];
  id: number;
  images: ImageType;
  installments_amount: string;
  installments_count: number;
  name: string;
  quantitaty: number;
  warranty: string;
  setListProducts: Dispatch<SetStateAction<CheckOutProductType[]>>;
  selectedColor: number;
  index: number;
  slug: string;
  defaultImageUrl: string;
  domain: string;
  onChangeHandler: (
    label: 'color' | 'QTD',
    index: number,
  ) => (e: ChangeEvent<HTMLSelectElement>) => void;
  onDeleteHandler: (id: number) => () => void;
  navigateHandler: (slug: string) => void;
};

// TODO: make a sucessfull and cancell page to the user.
export default Payment;
