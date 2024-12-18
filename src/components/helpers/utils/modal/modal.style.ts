import styled from 'styled-components';
import { flexBox, flexBoxDirection } from '../../../../settings/styles/utils';
import { div } from 'framer-motion/client';

export const Warning = styled.div`
  ${flexBox('center', 'center')};
  /* width: ${() => window.innerWidth}; */
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
  top: 0;
  left: 0;
  position: fixed;
`;

export const ModalCloser = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 0;
  top: 0;
  margin-top: 10px;
  margin-right: 2px;
  cursor: pointer;
  z-index: 10;

  [modal-content='modal-closer'] {
    transform: scale(2);
  }
  &:hover [modal-content='modal-closer'] {
    color: gray;
  }
`;

export const ModalContainer = styled(div)`
  ${flexBoxDirection('center', 'center', 'column')}
  position: relative;
  width: 600px;
  min-height: 200px;
  height: auto;
  border-radius: 20px;

  @media (min-width: 0px) and (max-width: 768px) {
    width: 90%;
    ${ModalCloser} {
      margin-right: 25px;
    }
  }

  @media (min-width: 0px) and (max-width: 520px) {
    ${ModalCloser} {
      margin-right: 15px;
    }
  }
`;
