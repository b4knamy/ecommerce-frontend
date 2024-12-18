import { Dispatch, SetStateAction, useState } from 'react';
import { CheckOutProductType } from '..';
import { fetchCheckOutURL } from '../helpers';
import { InitState } from '../../../context/authContext/context/context.type';
import { PaymentCheckoutContainer } from '../index.style';
import Loading from '../../../animations/productsLoading/loading';

export default function PaymentCheckout({
  finalAmount,
  setLogUserIn,
  user,
  listProducts,
  url,
}: PaymentCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <PaymentCheckoutContainer>
      <div className="resume">
        <span>RESUMO</span>
      </div>
      <div className="separator"></div>

      <div className="checkout-details">
        <span>Total:</span>
        <span>R${finalAmount}</span>
      </div>
      <div className="checkout-button">
        {isLoading ? (
          <Loading />
        ) : (
          <button
            type="button"
            onClick={() => {
              if (user.isAuthenticated && user.token) {
                try {
                  setIsLoading(true);
                  const jsonData = {
                    user_ID: user.info?.id,
                    installments_count: 12,
                    data: listProducts.map((product) => {
                      return {
                        productID: product.id,
                        colorID: product.selectedColor,
                        quantitaty: product.currentQTD,
                      };
                    }),
                  };
                  fetchCheckOutURL(jsonData, user.token.access, url).then(
                    async (response) => {
                      if (response.status === 303) {
                        const checkout = await response.json();
                        window.open(checkout.checkout_url);
                        setIsLoading(false);
                      } else if (response.status === 401) {
                        setIsLoading(false);
                      }
                    },
                  );
                } catch {}
              } else {
                setLogUserIn(true);
              }
            }}
          >
            Fazer checkout
            {isLoading && 'ASKDPKSDPFOKSDPOF'}
          </button>
        )}
      </div>
    </PaymentCheckoutContainer>
  );
}

type PaymentCheckoutProps = {
  finalAmount: string;
  setLogUserIn: Dispatch<SetStateAction<boolean>>;
  user: InitState;
  listProducts: CheckOutProductType[];
  url: string;
};
