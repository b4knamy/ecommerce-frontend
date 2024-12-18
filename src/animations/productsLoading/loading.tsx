import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LoadingContainer } from './loading.style';

export default function Loading(props: props) {
  return (
    <LoadingContainer
      $height={props.height ? props.height : '100%'}
      $width={props.width ? props.width : '100%'}
      $initScale={props.init ? props.init : 6}
      $finishScale={props.finish ? props.finish : 4}
      $color={props.color ? props.color : 'rgb(193, 42, 0)'}
      className={`loading-spinner ${props.class || ''}`}
      data-testid="loading-products-spinner"
    >
      <AiOutlineLoading3Quarters />
    </LoadingContainer>
  );
}

type props = {
  height?: string;
  width?: string;
  init?: number;
  finish?: number;
  color?: string;
  class?: string;
};
