import { MouseEventHandler } from 'react';
import { ByFilterProps } from './filters.type';
import { Content } from '../components.style';

export default function ByFilters({
  id,
  name,
  count,
  slug,
  setFilterContext,
  isFiltered,
  testName,
}: ByFilterProps) {
  const onClickHandler: MouseEventHandler<HTMLInputElement> = (event): void => {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      setFilterContext(slug, !input.checked);
    }
  };
  return (
    <Content>
      <input
        defaultChecked={isFiltered}
        onClick={onClickHandler}
        type="checkbox"
        id={`glasses-${testName}-${id}`}
        data-testid={`search-${testName}-${id}`}
      />
      <label htmlFor={`glasses-${testName}-${id}`}>
        <span>{name}</span>
        <span className="item-count">({count})</span>
      </label>
    </Content>
  );
}
