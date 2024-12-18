import styled from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../../settings/styles/utils';

export const PwdHidder = styled.div`
  ${flexBox('center', 'center')}
  position: absolute;
  height: 100%;
  width: 40px;
  right: 0;
  top: 0;
  z-index: 2;
  cursor: pointer;
`;
export const PasswordContainer = styled.div`
  width: 300px;
  height: 40px;
  position: relative;
  margin: 0 auto;

  svg {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
  .input-icon {
    position: absolute;
    transform: scale(2);
    top: 0;
    bottom: 0;
    left: 0;
    margin-left: 10px;
    margin-top: 10px;
  }
`;
export const InputForm = styled.input`
  width: 100%;
  height: 40px;
  ${({ theme }) => ({
    backgroundColor: theme.colors.secondaryDark,
    color: theme.colors.primaryLight,
  })}
  font-size: 15px;
  padding: 0px 10px;
  padding-left: 40px;
  border-radius: 15px;
  outline: none;
  z-index: 2;
`;

export const Container = styled.div`
  ${flexBoxDirection('center', 'start', 'column')}

  width: 300px;
  height: auto;
  position: relative;
  gap: 5px;

  p {
    color: rgb(201, 71, 71);
  }
`;
