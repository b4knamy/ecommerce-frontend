import SearchProducts, { NoDataExists } from './components/products/products';
import SearchNavigation from './components/navigate/navigate';
import Loading from '../../../../animations/productsLoading/loading';
import useNavigationHook from './hook';
import { Content } from '../../index.style';
import useSearchContext from '../../../../context/searchContext/context/context';
export default function Navigation() {
  const { content, getProducts, isLoading } = useSearchContext();
  const { searchNavClickHandler, productsElement } = useNavigationHook(
    getProducts,
    content.page,
  );

  return (
    <Content>
      {isLoading ? (
        <Loading init={12} finish={16} class="loading-products" />
      ) : content.count === 0 ? (
        <NoDataExists text="Nenhum produto foi encontrado" />
      ) : (
        <>
          <SearchProducts
            products={content.products}
            reference={productsElement}
          />
          <SearchNavigation
            last={content.last}
            page={content.page}
            searchNavClickHandler={searchNavClickHandler}
          />
        </>
      )}
    </Content>
  );
}
