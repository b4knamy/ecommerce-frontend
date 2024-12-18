import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxOnlyDirection,
} from '../../../../settings/styles/utils';

type FormTitleProps = {
  $isLowerSize: boolean;
};

export const FormWrapper = styled.form`
  ${flexBoxOnlyDirection('column')}
  gap: 10px;
  width: 400px;
  height: auto;
  padding: 10px 30px;
  border-radius: 20px;

  @media (min-width: 0px) and (max-width: 1024px) {
    width: auto;
  }
`;

export const FormTitle = styled.div<FormTitleProps>`
  ${flexBox('start', 'center')}

  position: relative;
  font-size: 30px;
  height: 60px;
  width: 100%;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryDark};
  margin-bottom: 30px;
  padding-bottom: 10px;

  svg {
    margin-left: 20px;
    margin-top: 25px;
  }

  ${({ $isLowerSize }) => {
    if ($isLowerSize === true) {
      return {
        width: '140px',
      };
    }
  }}
`;

export const LowerContainer = styled.div`
  ${({ theme }) => css`
    height: calc(100vh - 120px);
    overflow: scroll;
    position: fixed;
    left: 0;
    top: 0;
    margin-top: 120px;
    height: calc(100vh - 120px);
    gap: 20px;
    background-color: white;
    border-right: 1px solid ${theme.colors.primaryDark};
    padding: 70px 30px 30px 30px;
    width: 100%;
    ${flexBoxOnlyDirection('column')}
    z-index: 30;

    .close-filter {
      width: 50px;
      height: 40px;
      background-color: ${theme.colors.secondaryDark};
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 0px 0px 0px 10px;
      ${flexBox('center', 'center')}
      cursor: pointer;

      svg {
        transform: scale(2.5);
        color: ${theme.colors.primaryLight};
      }

      &:hover {
        svg {
          color: ${theme.colors.primaryDark};
        }
      }
    }
  `}
`;
