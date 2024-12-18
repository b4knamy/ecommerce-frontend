import styled from 'styled-components';
import { flexBoxOnlyDirection } from '../../../settings/styles/utils';

export const InputContainer = styled.div<{ $width: string; $height: string }>`
  /* width: max-content; */
  height: max-content;
  padding: 10px;
  position: relative;
  padding-left: 150px;
  ${flexBoxOnlyDirection('row')}
  gap: 20px;

  input {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
    padding: 5px;
    background-color: white;
    border: 1px solid black;
  }
  label {
    position: absolute;
    left: 0;
    min-width: 100px !important;
    font-size: 25px;
  }

  .input-error {
    color: red;
  }

  @media (min-width: 0px) and (max-width: 520px) {
    flex-direction: column;
    gap: 5px;
    padding-left: 0px;
    font-size: 15px;
    input {
      max-width: 300px;
    }
    label {
      position: relative;
    }
  }
`;
