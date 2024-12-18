import styled from 'styled-components';
import { flexBoxDirection } from '../../settings/styles/utils';

export const Container = styled.div`
  ${flexBoxDirection('center', 'center', 'column')};

  width: 100%;
  height: auto;
  padding: 0px 0px 50px 0px;
`;

export const Content = styled.div`
  ${flexBoxDirection('center', 'center', 'row')}
  width: 100%;
  margin-top: 50px;

  @media (min-width: 0px) and (max-width: 767px) {
    flex-direction: column;
    gap: 50px;
  }
`;
