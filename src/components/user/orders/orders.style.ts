import styled from 'styled-components';
import {
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../settings/styles/utils';

export const OrderContainer = styled.div`
  width: 90%;
  height: auto;
  border-radius: 20px 20px 0px 0px;
  ${flexBoxDirection('center', 'center', 'column')};
  border: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

export const OrdersContainer = styled.section<{ $display: string }>`
  width: 100%;
  height: auto;
  display: ${({ $display }) => `${$display} !important`};
  ${flexBoxDirection('start', 'center', 'column')}
  gap: 20px;
  padding: 10px;
  overflow-y: auto;
  max-height: calc(100vh - 220px);
  padding-top: 20px;
  min-height: calc(100vh - 220px);
`;

export const OrderProductsContainer = styled.div`
  width: 100%;
  padding: 10px;
  ${flexBoxDirection('center', 'center', 'column')}
  gap: 10px;
`;

export const OrderDetails = styled.div`
  width: 100%;
  height: 50px;
  ${({ theme }) => ({
    backgroundColor: theme.colors.primaryLight,
    color: theme.colors.primaryDark,
  })}
  padding-left: 40px;
  border-radius: 20px 20px 0px 0px;
  gap: 30px;
  div {
    width: max-content;
    ${flexBoxOnlyDirection('column')}
    gap: 5px;
  }
  ${flexBoxDirection('start', 'center', 'row')}

  @media (min-width: 520px) and (max-width: 767px) {
    div span {
      font-size: 12px;
    }
  }
  @media (min-width: 0px) and (max-width: 519px) {
    padding-left: 10px;
    gap: 10px;
    div span {
      font-size: 10px;
    }
  }
`;
