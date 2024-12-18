import styled from 'styled-components';
import { flexBoxDirection } from '../../../settings/styles/utils';

export const Container = styled.footer`
  width: 100%;
  height: 100px;
  ${({ theme }) => ({
    backgroundColor: theme.colors.primaryDark,
    color: theme.colors.primaryLight,
  })};
  gap: 10px;
  ${flexBoxDirection('center', 'center', 'column')}
`;
