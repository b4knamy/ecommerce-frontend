import styled, { css } from 'styled-components';
import { flexBoxDirection } from '../../../../settings/styles/utils';

export const Container = styled.div`
  ${({ theme }) => css`
    ${flexBoxDirection('center', 'center', 'column')};
    width: 100%;

    .related-text-container {
      span {
        font-size: ${theme.text.size.title};
      }
      margin-bottom: 100px;
    }

    .related-container {
      ${flexBoxDirection('center', 'center', 'row')};
      flex-wrap: wrap;
      gap: 100px;
    }

    margin-top: 50px;
    padding: 100px 0px 100px 0px;
    background-color: ${theme.colors.primaryLight};
    flex-wrap: wrap;

    @media (min-width: 0px) and (max-width: 768px) {
      padding: 50px 0px 50px 0px;

      .related-text-container {
        span {
          font-size: ${theme.text.size.large};
        }
      }

      .related-container {
        gap: 20px;
      }
    }
  `}
`;
