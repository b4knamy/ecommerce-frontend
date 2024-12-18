import { ImageType } from '../../../../../home/components/pricing/pricing.type';
import { ReactNode } from 'react';
import { AddCartPayload } from '../../../../../../context/cartContext/actions/actions.type';
import createCartObj from '../../../../../../utils/cart';
import { ProductView, QueryItemContainer } from './item.style';
const itemVariants = {
  initial: { opacity: 1 },
  exit: { opacity: 0, x: -2000, transition: { duration: 0.5 } },
};

type props = {
  name: string;
  slug: string;
  images: null | ImageType;
  quantitaty?: number;
  amount: string;
  navigateHandler: (slug: string) => void;
  mode: 'checkout' | 'search' | 'cart';
  children?: ReactNode;
  addItem?: (payload: AddCartPayload) => void;
  defaultImageUrl: string;
  domain: string;
};
export default function QueryItem({
  name,
  slug,
  images,
  quantitaty,
  amount,
  navigateHandler,
  mode,
  children,
  addItem,
  defaultImageUrl,
  domain,
}: props) {
  const imageUrl = domain + (images ? images.url : defaultImageUrl);
  return (
    <QueryItemContainer
      key={slug}
      variants={itemVariants}
      $mode={mode}
      initial="initial"
      animate="initial"
      exit="exit"
      layout
    >
      <ProductView onClick={() => navigateHandler(slug)}>
        <img src={imageUrl} alt={images?.description || 'imagem padrão'} />
        <div>
          <div>
            <h2>{name}</h2>
          </div>

          {mode === 'cart' && (
            <span className="important _price">R$ {amount}</span>
          )}
          {mode === 'search' &&
            (quantitaty && quantitaty > 0 ? (
              <span className="important">Disponivel</span>
            ) : (
              <span className="sold-out">Esgotado</span>
            ))}
        </div>
      </ProductView>
      {mode === 'search' ? (
        <>
          <div>
            <span className="important">{quantitaty}</span>
          </div>
          <div>
            <span className="important _price">R$ {amount}</span>
          </div>

          <div>
            <button
              onClick={() =>
                addItem &&
                addItem(createCartObj({ name, slug, images, amount }))
              }
              className="search-save-cart"
            >
              Salvar no carrinho
            </button>
          </div>
        </>
      ) : (
        children
      )}
    </QueryItemContainer>
  );
}
