import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../../../settings/styles/utils';

export const Container = styled.div`
  position: relative;
  ${flexBoxDirection('space-between', 'center', 'row')}
  gap: 50px;
  width: 400px;

  img {
    width: 300px;
    height: 200px;
    right: 0;
  }

  div {
    span {
      ${({ theme }) => {
        return {
          fontSize: theme.text.size.medium,
          color: theme.colors.primaryLight,
        };
      }}
    }
    ${flexBoxOnlyDirection('column')}
    gap: 30px
  }
`;
