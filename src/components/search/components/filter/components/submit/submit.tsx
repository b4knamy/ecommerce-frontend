import { Container } from './submit.style';
import useSearchContext from '../../../../../../context/searchContext/context/context';
import { SiteSettings } from '../../../../../../context/settingsContext/context';
import { queryResolver } from '../../../../utils';
import { Dispatch, SetStateAction } from 'react';

type props = {
  settings: SiteSettings;
  setShowFilter?: Dispatch<SetStateAction<boolean>>;
};

export default function BySubmit({ settings, setShowFilter }: props) {
  const { filter, getProducts } = useSearchContext();

  const submitFilter = (): void => {
    const query = queryResolver(filter, settings);
    if (query === location.search || '?' + query === location.search) return;
    if (setShowFilter) {
      setShowFilter(false);
    }
    return getProducts(query);
  };

  return (
    <Container>
      <input
        onClick={submitFilter}
        type="button"
        value="Filtrar"
        data-testid="submit-filter"
      />
    </Container>
  );
}
