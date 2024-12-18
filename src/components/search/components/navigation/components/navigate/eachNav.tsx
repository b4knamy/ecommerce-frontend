import { ButtonNav } from './navigate.style';
import { EachNaveProps } from './navigate.type';

export default function EachNav({
  is_current,
  searchNavClickHandler,
  page,
}: EachNaveProps) {
  return (
    <ButtonNav
      $isCurrent={is_current ? "true" : "false"}
      onClick={searchNavClickHandler}
      type="button"
      data-target={page}
    >
      {page}
    </ButtonNav>
  );
}
