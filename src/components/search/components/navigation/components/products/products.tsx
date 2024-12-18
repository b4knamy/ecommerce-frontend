import * as S from './products.style';
import { PriceTable } from '../../../../../home/components/pricing/pricetable/pricetable';
import { ProductsType } from './products.type';
import { TfiFaceSad } from 'react-icons/tfi';
import useCartContext from '../../../../../../context/cartContext/context/context';
import { motion } from 'framer-motion';
import useSettings from '../../../../../../context/settingsContext/context';
export function NoDataExists({ text }: { text: string }) {
  return (
    <S.NoFoundContent data-testid="no-data-founded">
      <TfiFaceSad />
      <span>{text} :(</span>
    </S.NoFoundContent>
  );
}
// TODO: REACT ICONS HERE
export const searchVariants = {
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const childVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 1 } },
};
export default function SearchProducts({
  products = [],
  reference,
}: ProductsType) {
  const { settings } = useSettings();
  const { actions } = useCartContext();
  return (
    <S.ContainerWrapper
      data-testid="search-products"
      ref={reference}
      variants={searchVariants}
      animate="animate"
      initial="initial"
    >
      {products.map((product) => {
        return (
          <motion.div key={product.id} variants={childVariants}>
            <PriceTable
              name={product.name}
              images={product.images}
              amount={product.amount}
              installments_amount={product.installments_amount}
              installments_count={product.installments_count}
              is_promo={product.is_promo}
              slug={product.slug}
              discount={product.discount}
              final_amount={product.final_amount}
              addItem={actions.addItem}
              defaultImageUrl={settings.default_image_url}
              domain={settings.site_domain}
            />
          </motion.div>
        );
      })}
    </S.ContainerWrapper>
  );
}
