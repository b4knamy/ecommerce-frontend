import * as S from './navigate.style';
import EachNav from './eachNav';
import { SearchNavigationProps } from './navigate.type';
import { SlArrowRight, SlArrowLeft } from 'react-icons/sl';
import { navigationArrayResolver } from '../../../../utils';

export default function SearchNavigation({
  last,
  page,
  searchNavClickHandler,
}: SearchNavigationProps) {
  const navigationBar = navigationArrayResolver(page, last);
  return (
    <S.ContainerWrapper data-testid="search-navigation">
      <S.SideOptions>
        {page > 1 && (
          <>
            <span onClick={searchNavClickHandler} data-target="1">
              Inicio
            </span>
            <S.Arrow
              data-testid="navigation-icon-left"
              onClick={searchNavClickHandler}
              data-target={page - 1}
            >
              <SlArrowLeft />
            </S.Arrow>
          </>
        )}
      </S.SideOptions>

      <S.GroupNav data-testid="navigation-button-group">
        {navigationBar.map((target) => {
          return (
            <EachNav
              key={target}
              page={target}
              is_current={page == target ? true : false}
              searchNavClickHandler={searchNavClickHandler}
            />
          );
        })}
      </S.GroupNav>

      <S.SideOptions>
        {page < last && (
          <>
            <S.Arrow
              data-testid="navigation-icon-right"
              onClick={searchNavClickHandler}
              data-target={page + 1}
            >
              <SlArrowRight />
            </S.Arrow>
            <span onClick={searchNavClickHandler} data-target={last}>
              Final
            </span>
          </>
        )}
      </S.SideOptions>
    </S.ContainerWrapper>
  );
}
