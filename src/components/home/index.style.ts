import styled from 'styled-components';
import { flexBoxDirection } from '../../settings/styles/utils';

export const Container = styled.main`
  ${flexBoxDirection('center', 'center', 'column')}
  width: 100%;
  height: auto;
  /* background-color: ${({ theme }) => {
    return theme.colors.primaryLight;
  }}; */
`;
