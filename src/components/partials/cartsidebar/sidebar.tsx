import { IoMdClose } from 'react-icons/io';
import QueryItem from '../navbar/navtopside/search/data/item';
import useCartSideBar from './hooks';
import { ItemsContainer, SideBarContainer, Title } from './sidebar.style';
import SubTotalCheckout from './checkout/checkout';
import { AnimatePresence } from 'framer-motion';
import CartOptions from './options/options';
import { useNavigate } from 'react-router-dom';
import { NoDataExists } from '../../search/components/navigation/components/products/products';
import useSettings from '../../../context/settingsContext/context';
export default function CartSideBar() {
  const {
    removeCart,
    totalValue,
    shoppingContext,
    setShoppingList,
    cart,
    shoppingList,
    closeSideBar,
  } = useCartSideBar();
  const navigate = useNavigate();
  const { settings } = useSettings();

  const navigateHandler = (slug: string) => {
    closeSideBar();
    navigate('/oculos/' + slug);
  };

  return (
    <SideBarContainer data-content="cart-side-bar">
      <Title>
        <span>Carrinho</span>
        <IoMdClose onClick={closeSideBar} title="Fechar" />
      </Title>
      <ItemsContainer>
        {cart.products.length === 0 ? (
          <NoDataExists text="Não há produtos no carrinho" />
        ) : (
          <AnimatePresence>
            {cart.products.map((product) => {
              return (
                <QueryItem
                  key={product.slug}
                  name={product.name}
                  amount={product.amount}
                  slug={product.slug}
                  mode="cart"
                  navigateHandler={navigateHandler}
                  images={product.images}
                  defaultImageUrl={settings.default_image_url}
                  domain={settings.site_domain}
                >
                  <CartOptions
                    setShoppingList={setShoppingList}
                    removeCart={removeCart}
                    name={product.name}
                    amount={product.amount}
                    slug={product.slug}
                  />
                </QueryItem>
              );
            })}
          </AnimatePresence>
        )}
      </ItemsContainer>
      <SubTotalCheckout
        closeSideBar={closeSideBar}
        amount={totalValue.toFixed(2)}
        length={shoppingList.length}
        navigate={navigate}
        shoppingContext={shoppingContext}
      />
    </SideBarContainer>
  );
}
