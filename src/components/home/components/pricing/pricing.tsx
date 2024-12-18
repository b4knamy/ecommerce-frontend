import { useEffect, useState } from 'react';
import * as S from './pricing.style';
import { PriceTable } from './pricetable/pricetable';
import { PricingProps } from './pricing.type';
import useCartContext from '../../../../context/cartContext/context/context';
import Loading from '../../../../animations/productsLoading/loading';
import {
  childVariants,
  searchVariants,
} from '../../../search/components/navigation/components/products/products';
import { AnimatePresence, motion } from 'framer-motion';
import useSettings from '../../../../context/settingsContext/context';

export default function Pricing({ url }: { url: string }) {
  const { settings } = useSettings();
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<PricingProps>({
    data: [],
    page: 1,
    hasNext: true,
  });

  const { actions } = useCartContext();

  useEffect(() => {
    getPromotions(products.page);
  }, []);

  const getPromotions = async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(url + '/' + page);

      if (response.ok) {
        const answer = await response.json();
        setProducts((prev) => {
          const data = [...prev.data, ...answer.data];
          return {
            data: data,
            page: page,
            hasNext: answer.has_next,
          };
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <S.ContainerWrapper
      as={motion.div}
      variants={searchVariants}
      animate="animate"
      initial="initial"
    >
      {products.data.length > 0 && (
        <>
          <S.Title>
            <h2>Confira nossas promoções</h2>
          </S.Title>
          <S.Content>
            <AnimatePresence>
              {products.data.map((glasses) => {
                return (
                  <motion.div key={glasses.id} variants={childVariants}>
                    <PriceTable
                      key={glasses.id}
                      name={glasses.name}
                      final_amount={glasses.final_amount}
                      amount={glasses.amount}
                      installments_amount={glasses.installments_amount}
                      installments_count={glasses.installments_count}
                      images={glasses.images}
                      is_promo={glasses.is_promo}
                      slug={glasses.slug}
                      addItem={actions.addItem}
                      discount={glasses.discount}
                      defaultImageUrl={settings.default_image_url}
                      domain={settings.site_domain}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </S.Content>
          <S.GetMoreResults>
            {products.hasNext &&
              (isLoading ? (
                <Loading />
              ) : (
                <div onClick={() => getPromotions(products.page + 1)}>
                  <button>Mostrar mais resultados</button>
                </div>
              ))}
          </S.GetMoreResults>
        </>
      )}
    </S.ContainerWrapper>
  );
}
