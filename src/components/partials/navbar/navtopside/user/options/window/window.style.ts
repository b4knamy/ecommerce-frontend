import styled from 'styled-components';
import { flexBox } from '../../../../../../../settings/styles/utils';

export const Container = styled.div`
  ${flexBox('center', 'center')}
  width: max-content;
  svg {
    transform: scale(3);

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }

    @media (min-width: 1024px) and (max-width: 1400px) {
      transform: scale(2);
    }
  }
`;
