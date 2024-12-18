import * as S from './filter.style';
import ByOrderContainer from './components/order/order';
import BySubmit from './components/submit/submit';
import useSearchHook from './hook';
import ByFiltersContainer from './components/dynamicfilters/filters';
import ByAmountContainer from './components/amount/amount';
import useSettings, {
  SiteSettings,
} from '../../../../context/settingsContext/context';
import {
  Dispatch,
  memo,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { ActionsProps } from '../../../../context/searchContext/actions/actions.type';
import { FilterDataType } from './filter.type';
import { div } from 'framer-motion/client';
import { MdClose } from 'react-icons/md';
import { IoIosArrowUp } from 'react-icons/io';
const variants = {
  hidden: { maxWidth: 0, display: 'none', opacity: 0 },
  open: { maxWidth: 400, display: 'flex', opacity: 1 },
};
interface SearchContainerProps extends ActionsProps {
  containerRef: MutableRefObject<HTMLElement | null>;
}

const SearchContainer = ({ actions, containerRef }: SearchContainerProps) => {
  const { api, settings } = useSettings();
  const { isLoading, filterData } = useSearchHook(api.filters);
  const [isLowerSize, setIsLowerSize] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const changeAppearence = () => {
      if (window.screen.width < 1450) {
        setIsLowerSize(true);
        containerRef.current?.classList.add('direction-layout');
      } else {
        setIsLowerSize(false);
        containerRef.current?.classList.remove('direction-layout');
      }
    };

    changeAppearence();
    window.addEventListener('resize', changeAppearence);

    return () => window.removeEventListener('resize', changeAppearence);
  }, []);

  if (isLoading) {
    return (
      <h1 data-testid="filter-data-loading">Is loading the page Search</h1>
    );
  }

  return (
    <S.FormWrapper data-testid="search-form-wrapper">
      <S.FormTitle
        onClick={() => setShowFilter(true)}
        $isLowerSize={isLowerSize}
      >
        <span>
          Filtrar
          {isLowerSize && (
            <IoIosArrowUp
              style={{
                transform: showFilter ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            />
          )}
        </span>
      </S.FormTitle>
      {isLowerSize ? (
        <S.LowerContainer
          as={div}
          initial="hidden"
          animate={showFilter ? 'open' : 'hidden'}
          exit="hidden"
          variants={variants}
          transition={{ duration: 1, type: 'spring' }}
        >
          <div className="close-filter" onClick={() => setShowFilter(false)}>
            <MdClose />
          </div>
          <CurrentFilters
            filterData={filterData}
            settings={settings}
            actions={actions}
            setShowFilter={setShowFilter}
          />
        </S.LowerContainer>
      ) : (
        <CurrentFilters
          filterData={filterData}
          settings={settings}
          actions={actions}
        />
      )}
    </S.FormWrapper>
  );
};

const CurrentFilters = ({
  filterData,
  settings,
  actions,
  setShowFilter,
}: CurrentFiltersProps) => {
  return (
    <>
      <ByFiltersContainer
        data={filterData.filter_1}
        containerName={settings.filter_1}
        testName={settings.param_1}
        relatedAction={actions.addFilter1}
        params={filterData.params.get(settings.param_1)}
      />
      <ByFiltersContainer
        data={filterData.filter_2}
        containerName={settings.filter_2}
        testName={settings.param_2}
        relatedAction={actions.addFilter2}
        params={filterData.params.get(settings.param_2)}
      />
      <ByFiltersContainer
        data={filterData.filter_3}
        containerName={settings.filter_3}
        testName={settings.param_3}
        relatedAction={actions.addFilter3}
        params={filterData.params.get(settings.param_3)}
      />
      <ByFiltersContainer
        data={filterData.filter_4}
        containerName={settings.filter_4}
        testName={settings.param_4}
        relatedAction={actions.addFilter4}
        params={filterData.params.get(settings.param_4)}
      />
      <ByFiltersContainer
        data={filterData.filter_5}
        containerName={settings.filter_5}
        testName={settings.param_5}
        relatedAction={actions.addFilter5}
        params={filterData.params.get(settings.param_5)}
      />
      <ByOrderContainer
        relatedAction={actions.addOrder}
        params={filterData.params.get('ordem')}
      />
      <ByAmountContainer
        data={filterData.amount}
        actions={actions}
        params={filterData.params}
      />

      <BySubmit settings={settings} setShowFilter={setShowFilter} />
    </>
  );
};

interface CurrentFiltersProps extends ActionsProps {
  filterData: FilterDataType;
  settings: SiteSettings;
  setShowFilter?: Dispatch<SetStateAction<boolean>>;
}
export default memo(SearchContainer);
