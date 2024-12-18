import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Wrapper } from './results.style';
import { useEffect, useState } from 'react';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaRegFaceSadCry } from 'react-icons/fa6';

export default function CheckoutResult() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const [count, setCount] = useState(15);

  const isSuccess = search.includes('success');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [count]);

  if (count <= 0) {
    navigate('/', { replace: true });
  }

  return (
    <Container $status={isSuccess ? 'success' : 'canceled'}>
      <Wrapper>
        <div>
          <span>
            {isSuccess
              ? 'Parabéns, você concluiu sua compra!'
              : 'Ops, algo de errado aconteceu e o seu pedido não foi finalizado!'}
          </span>
        </div>

        <div>
          {isSuccess ? <IoMdCheckmarkCircleOutline /> : <FaRegFaceSadCry />}
        </div>

        <div className="result-countdown">
          <span>Você será redirecionado de volta em {count} segundos!</span>
        </div>
      </Wrapper>
    </Container>
  );
}
