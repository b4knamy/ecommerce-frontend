import styled from 'styled-components';
import {
  flexBox,
  flexBoxDirection,
  flexBoxOnlyDirection,
} from '../../../settings/styles/utils';

export const ChangePasswordContainer = styled.section<{ $display: string }>`
  width: 100%;
  height: auto;
  margin-top: 50px;
  min-height: calc(100vh - 270px);
  display: ${({ $display }) => `${$display} !important`};
  ${flexBoxDirection('start', 'center', 'column')}
  gap: 10px;

  .change-warning {
    width: 100%;
    text-align: center;
    color: red;
  }

  button {
    width: 200px;
    height: 40px;
    background-color: gray;
    color: white;
  }

  .helper-text {
    ${flexBox('center', 'center')}
    width: 90%;

    text-align: center;
  }
`;

export const InputContainer = styled.div`
  width: auto;
  ${flexBoxOnlyDirection('row')}
  input {
    border: 1px solid ${({ theme }) => theme.colors.secondaryDark};
    height: 40px;
    width: 200px;
    padding-left: 5px;
  }
`;

export const ChangeForm = styled.div`
  width: auto;
  ${flexBoxDirection('start', 'start', 'column')}
  gap: 5px;
`;
