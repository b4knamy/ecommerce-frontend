import { Link } from 'react-router-dom';
import { OrderContent, OrderInformation } from './item.style';

const OrderItemView = ({
  name,
  amount,
  quantitaty,
  imageUrl,
  slug,
  color,
  defaultImageUrl,
}: OrderItemViewProps) => {
  const urlImage = imageUrl ? imageUrl : defaultImageUrl;

  return (
    <OrderContent>
      <img src={urlImage} alt="Image of the respectily product." />
      <OrderInformation>
        <div className="item-title">
          <p>{name}</p>
        </div>
        <div className="item-info">
          <span>Valor: {amount} R$</span>
          <span>Quantidade: {quantitaty}</span>
          <span>Cor: </span>
          <div className="color-ball" style={{ backgroundColor: color }}></div>
        </div>
        <div>
          <button>
            <Link to={'/oculos/' + slug}>Ver Produto</Link>
          </button>
        </div>
      </OrderInformation>
    </OrderContent>
  );
};

type OrderItemViewProps = {
  name: string;
  amount: string;
  quantitaty?: number;
  imageUrl?: string;
  slug: string;
  color: string;
  defaultImageUrl: string;
  comeFrom: string;
};

export default OrderItemView;
