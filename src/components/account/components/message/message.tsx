import { useState } from 'react';
import { ContainerMessage } from './message.style';
import { IoMdClose, IoIosWarning } from 'react-icons/io';
import { FaCheck } from 'react-icons/fa6';

export default function AlertMessage({
  status,
  message,
}: {
  status: 'good' | 'bad';
  message: string;
}) {
  const [isOn, setIsOn] = useState(true);

  if (!isOn) {
    return <></>;
  }
  return (
    <ContainerMessage $success={status}>
      {status === 'good' ? <FaCheck /> : <IoIosWarning />}
      <span>{message}</span>
      <IoMdClose
        style={{ cursor: 'pointer' }}
        onClick={() => {
          setIsOn(false);
        }}
      />
    </ContainerMessage>
  );
}
