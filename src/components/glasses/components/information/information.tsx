import * as Glasses from './information.style';
import { GlassesInformationType } from './information.type';
import useCartContext from '../../../../context/cartContext/context/context';
import createCartObj from '../../../../utils/cart';
const GlassesInformation = ({
  color,
  name,
  amount,
  installments_amount,
  installments_count,
  slug,
  images,
  final_amount,
  is_promo,
  discount,
}: GlassesInformationType) => {
  const { actions } = useCartContext();
  return (
    <Glasses.Container data-testid="__glasses_information">
      {is_promo && <div className="product-promotion">{discount}% OFF</div>}
      <Glasses.Title>
        <span>{name}</span>
      </Glasses.Title>

      <Glasses.Price>
        <span className="current">R${final_amount}</span>
        {is_promo && <span className="old">R${amount}</span>}
        <br />
        <span>
          em até {installments_count}x de R${installments_amount} sem juros.
        </span>
      </Glasses.Price>
      <Glasses.Colors>
        <span>Cores disponiveis:</span>
        <div>
          {color.map((_color) => {
            return (
              <div
                key={_color.id}
                style={{ backgroundColor: _color.css_color }}
                className="color-ball"
              ></div>
            );
          })}
        </div>
      </Glasses.Colors>
      <Glasses.Buttons>
        <button
          type="button"
          onClick={() => {
            const object = createCartObj({ amount, name, slug, images }, false);
            actions.addItem(object);
          }}
        >
          Adicionar no Carrinho
        </button>
      </Glasses.Buttons>
    </Glasses.Container>
  );
};

export default GlassesInformation;
