import styled from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../settings/styles/utils';

export const RLContainer = styled.div`
  ${flexBox('center', 'center')}
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.9);
`;
export const FormContainer = styled.form`
  ${flexBoxDirection('center', 'center', 'column')}

  width: 400px;
  height: auto;
  padding: 20px 0px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px white;
  gap: 20px;
  background-color: rgba(229, 228, 228, 0.7);
  ${({ theme }) => ({
    color: theme.colors.secondaryDark,
  })}
  position: relative;

  .close-session {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 10px;
    margin-right: 10px;
    transform: scale(2);
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primaryDark};

    &:hover {
      color: ${({ theme }) => theme.colors.secondaryDark};
    }
  }

  .auth-process {
    ${flexBoxDirection('center', 'center', 'column')}

    span {
      color: red;
      font-size: 20px;
    }
    gap: 10px;
    height: auto;
    min-height: 60px;
  }

  @media (min-width: 0px) and (max-width: 450px) {
    width: 90%;
  }
`;
