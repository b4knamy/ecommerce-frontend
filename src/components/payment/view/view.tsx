import { memo } from 'react';
import { CheckOutProductType } from '..';
import QueryItem from '../../partials/navbar/navtopside/search/data/item';
import { HiOutlineTrash } from 'react-icons/hi';
import { Delete, SelectContainer } from './view.style';
export const ProductQuantitatyOptions = memo(({ count }: PQOProps) => {
  const options = [];
  for (let i = 1; i <= count; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>,
    );
  }
  return options;
});

const ProductView = (props: CheckOutProductType) => {
  return (
    <QueryItem
      slug={props.slug}
      name={props.name}
      amount={props.amount}
      mode="checkout"
      images={props.images}
      navigateHandler={props.navigateHandler}
      defaultImageUrl={props.defaultImageUrl}
      domain={props.domain}
    >
      <>
        <SelectContainer $mode="color">
          <select
            name="color"
            id="product-color"
            onChange={props.onChangeHandler('color', props.index)}
          >
            {props.color.map((_color) => (
              <option key={_color.id} value={_color.id}>
                {_color.name}
              </option>
            ))}
          </select>
        </SelectContainer>
        <SelectContainer $mode="qtd">
          <select
            onChange={props.onChangeHandler('QTD', props.index)}
            value={props.currentQTD}
          >
            <ProductQuantitatyOptions count={props.quantitaty} />
          </select>
        </SelectContainer>

        <div>
          <span className="important _price">R$ {props.amount}</span>
        </div>
        <Delete onClick={props.onDeleteHandler(props.id)}>
          <HiOutlineTrash />
        </Delete>
      </>
    </QueryItem>
  );
};

type PQOProps = { count: number };
export default memo(ProductView);
