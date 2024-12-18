import styled from 'styled-components';
import { flexBox } from '../../../settings/styles/utils';
import { NoDataExists } from '../../search/components/navigation/components/products/products';

export default function NoPageFound() {
  return (
    <Container>
      <NoDataExists text="Esta pagina não existe" />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexBox('center', 'center')}
`;
