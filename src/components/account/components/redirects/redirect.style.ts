import styled from 'styled-components';
import { flexBoxDirection } from '../../../../settings/styles/utils';

export const RLContainer = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  gap: 20px;
  width: 100%;
  text-align: center;

  span {
    font-size: 18px;
  }
`;

export const Redirect = styled.span`
  text-decoration: none;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
