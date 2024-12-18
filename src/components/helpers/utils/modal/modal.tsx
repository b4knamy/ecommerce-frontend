import { ReactNode } from 'react';
import { ModalCloser, ModalContainer, Warning } from './modal.style';
import { IoClose } from 'react-icons/io5';

const variants = {
  close: { y: 500, opacity: 0 },
  open: { y: 0, opacity: 1 },
};

export default function WarningModal(props: {
  children: ReactNode;
  handler: () => void;
}) {
  return (
    <Warning>
      <ModalContainer
        variants={variants}
        initial="close"
        exit="close"
        animate="open"
      >
        <ModalCloser onClick={props.handler}>
          <IoClose modal-content="modal-closer" />
        </ModalCloser>

        {props.children}
      </ModalContainer>
    </Warning>
  );
}
