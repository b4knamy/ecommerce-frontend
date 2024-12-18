import { MutableRefObject, useEffect, useRef } from 'react';
import {
  Container,
  QueryData,
  QueryDetails,
  QueryFields,
  SearchMoreResults,
} from './data.style';
import QueryItem from './item';
import { QueryDataProps } from '../hook';
import { NoDataExists } from '../../../../../search/components/navigation/components/products/products';
import Loading from '../../../../../../animations/productsLoading/loading';
import { useNavigate } from 'react-router-dom';
import useCartContext from '../../../../../../context/cartContext/context/context';
import { AnimationControls, motion } from 'framer-motion';
import useSettings from '../../../../../../context/settingsContext/context';

const variants = {
  hidden: { opacity: 0, height: 0, display: 'none' },
  open: { opacity: 1, height: 'auto', display: 'flex' },
};

export default function QuerySearchContainer({
  search,
  containerRef,
  isLoading,
  getNextPageQuery,
  controls,
}: props) {
  const { count, data, limit, page } = search;
  const navigate = useNavigate();
  const { actions } = useCartContext();
  const { settings } = useSettings();
  const dataContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (dataContainerRef.current) {
      const lastChild = dataContainerRef.current.lastElementChild;
      const timeout = setTimeout(() => {
        lastChild?.scrollIntoView({ behavior: 'smooth' });
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [data.length]);

  const navigateHandler = (slug: string) => {
    controls.start('hidden');
    navigate('/oculos/' + slug);
  };
  return (
    <Container
      as={motion.div}
      ref={containerRef}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1, type: 'spring' }}
    >
      {isLoading && page === 1 ? (
        <Loading />
      ) : data.length > 0 ? (
        <>
          <QueryDetails>
            <span>{count} produtos encontrados.</span>
          </QueryDetails>

          <QueryData ref={dataContainerRef} $mode="search">
            <QueryFields $mode="search">
              <span>Produto</span>
              <span>{window.screen.width < 768 ? 'Qtd' : 'Quantidade'}</span>
              <span>Preço</span>
            </QueryFields>
            {data.map((product) => {
              return (
                <QueryItem
                  {...product}
                  navigateHandler={navigateHandler}
                  mode="search"
                  addItem={actions.addItem}
                  defaultImageUrl={settings.default_image_url}
                  domain={settings.site_domain}
                />
              );
            })}
            <SearchMoreResults>
              {isLoading ? (
                <Loading height="100%" class="loading" />
              ) : (
                page < limit && (
                  <button onClick={() => getNextPageQuery()}>
                    Buscar mais resultados
                  </button>
                )
              )}
            </SearchMoreResults>
          </QueryData>
        </>
      ) : (
        <NoDataExists text="Nenhum produto encontrado com este filtro" />
      )}
    </Container>
  );
}

type props = {
  containerRef: MutableRefObject<HTMLDivElement | null>;
  search: QueryDataProps;
  isLoading: boolean;
  controls: AnimationControls;
  getNextPageQuery: () => void;
};
