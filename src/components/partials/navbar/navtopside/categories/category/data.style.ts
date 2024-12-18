import styled, { css } from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../../../../settings/styles/utils';
import { FadeInCSS } from '../../../../../../settings/styles/animation';
import { motion } from 'framer-motion';

export const CategoryDataContainer = styled.div`
  width: auto;
  height: 100%;
  ${flexBoxOnlyDirection('row')}
  position: relative;
`;
export const CategoryViewer = styled(motion.div)`
  width: auto;
  height: auto;
  position: relative;
  ${flexBoxDirection('center', 'center', 'column')}
`;

export const CategoryViewGroup = styled.div`
  ${flexBoxOnlyDirection('row')}
  width: auto;
  height: auto;

  .category-title:hover {
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryLight,
        color: theme.colors.primaryDark,
      };
    }}
  }

  &:hover .category-title {
    ${({ theme }) => {
      return {
        backgroundColor: theme.colors.primaryLight,
        color: theme.colors.primaryDark,
      };
    }};
  }
`;
export const CategoryViewTitle = styled.div`
  width: 150px;
  height: 50px;
  ${flexBoxDirection('center', 'center', 'column')}
  gap: 40px;
  cursor: pointer;
  transition: all 300ms linear;

  @media (min-width: 0px) and (max-width: 767px) {
    width: 100px;
  }
`;
export const CategoryViewData = styled.div<{ $display: string }>`
  ${({ theme, $display }) => css`
    width: max-content;
    position: absolute;
    padding: 10px 40px;
    margin-left: 150px;
    top: 0;
    ${flexBoxDirection('start', 'center', 'column')};
    flex-wrap: wrap;
    row-gap: 20px;
    gap: 20px;
    height: 100%;

    ${FadeInCSS(true)}
    ${$display === 'none' && { display: 'none !important' }};
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primaryDark};
    div {
      width: 120px;
      height: 50px;

      ${flexBox('center', 'center')}
      text-align: center;
      a {
        text-decoration: underline;
        font-weight: bold;
        cursor: pointer;
        color: ${theme.colors.primaryDark};
        font-size: ${theme.text.size.medium};

        &:hover {
          color: ${theme.colors.secondaryDark};
        }
      }
    }
    @media (min-width: 0px) and (max-width: 1023px) {
      overflow-y: auto !important;
      flex-direction: row;
      align-items: start;
      padding-top: 20px !important;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 10px 20px;
      width: calc(100vw - 150px);
    }
    @media (min-width: 0px) and (max-width: 767px) {
      padding: 5px 10px;
      gap: 10px;
      div {
        width: 100px;
        a {
          font-size: ${theme.text.size.small};
        }
      }

      width: calc(100vw - 100px);
      margin-left: 100px;
    }
  `}
`;
