import styled, { css } from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../settings/styles/utils';

type ContainerProps = {
  $status: 'canceled' | 'success';
};

export const Container = styled.div<ContainerProps>`
  width: 100vw;
  height: 100vh;
  ${flexBox('center', 'center')};

  background-color: ${({ theme, $status }) =>
    $status === 'success'
      ? theme.colors.primaryGreen
      : theme.colors.primaryRed};
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 400px;
    height: 500px;
    margin-bottom: 250px;
    text-align: center;
    color: ${theme.colors.primaryDark};
    font-size: ${theme.text.size.xxlarge};

    svg {
      transform: scale(8);
    }
    ${flexBoxDirection('center', 'center', 'column')};
    gap: 150px;

    span {
      white-space: nowrap;
    }
    @media (min-width: 520px) and (max-width: 768px) {
      font-size: ${theme.text.size.xlarge};

      span {
        white-space: wrap;
      }
    }

    @media (min-width: 0px) and (max-width: 519px) {
      font-size: ${theme.text.size.large};

      span {
        white-space: wrap;
      }
    }
  `}
`;
