import { useNavigate } from 'react-router-dom';
import { PriceTableProps } from './pricetable.type';
import * as S from './pricetable.style';
import createCartObj from '../../../../../utils/cart';
import { IoCart } from 'react-icons/io5';

export function PriceTable(props: PriceTableProps) {
  const navigate = useNavigate();
  const imgUrl =
    props.domain +
    (props.images?.url ? props.images.url : props.defaultImageUrl);
  return (
    <>
      <S.Container>
        {props.is_promo && <S.Promotion>{props.discount}% OFF</S.Promotion>}
        <img src={imgUrl} alt={props.images?.description} />
        <S.Title>
          <h3>{props.name}</h3>
        </S.Title>
        <S.Pricing>
          {props.is_promo && (
            <span className="old-value">R${props.amount}</span>
          )}
          <span className="current-amount">
            R$<strong>{props.final_amount}</strong>
          </span>
          <span className="installments">
            {props.installments_count}x de R$
            <strong>{props.installments_amount}</strong>
          </span>
        </S.Pricing>
        <S.Options>
          <button
            onClick={() => {
              navigate('/oculos/' + props.slug);
            }}
          >
            Mais
          </button>
          <button>
            <IoCart
              onClick={() => {
                // @ts-ignore
                props.addItem(createCartObj(props));
              }}
            />
          </button>
        </S.Options>
      </S.Container>
    </>
  );
}
