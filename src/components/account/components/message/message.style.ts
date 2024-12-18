import styled, { css } from 'styled-components';
import { flexBox } from '../../../../settings/styles/utils';

const SucessfullyStyle = css`
  background-color: green;
  color: green;
`;
const ErrorMessage = css`
  background-color: green;
  color: black;
`;
export const ContainerMessage = styled.div<{ $success: string }>`
  ${flexBox('center', 'center')}

  position: absolute;
  margin-right: 800px;
  width: 300px;
  height: 60px;

  font-size: 18px;
  transition: all 300ms linear;
  border: 1px solid black;
  border-radius: 5px;
  /* visibility: hidden; */
  margin-bottom: 500px;

  ${({ $success }) => {
    return $success === 'good' ? SucessfullyStyle : ErrorMessage;
  }};

  .fa-xmark {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 10px;
    margin-top: 3px;
    cursor: pointer;
  }
`;
