import { useState } from 'react';
import { AccountInputErrorType, RegisterInputType } from './input.type';
import { PasswordContainer, InputForm, PwdHidder } from './input.style';
import { FaEye } from 'react-icons/fa';
import { LuEyeOff } from 'react-icons/lu';
import { CiUser } from 'react-icons/ci';
import { GiPadlock } from 'react-icons/gi';

export function ShowError({ warning }: AccountInputErrorType) {
  return <p>{warning}</p>;
}

export function PwdInput({
  elementId,
  initValue,
  placeholder,
  reference,
}: RegisterInputType) {
  const [hidden, setHidden] = useState(true);

  return (
    <PasswordContainer>
      <GiPadlock className="input-icon" />
      <InputForm
        id={elementId}
        type={hidden ? 'password' : 'text'}
        defaultValue={initValue}
        ref={reference}
        placeholder={placeholder}
      />
      <PwdHidder
        onClick={() => {
          setHidden(!hidden);
        }}
      >
        {hidden ? <LuEyeOff /> : <FaEye />}
      </PwdHidder>
    </PasswordContainer>
  );
}

export function PartialsInput({
  type,
  elementId,
  reference,
  placeholder,
  initValue,
}: RegisterInputType) {
  return (
    <PasswordContainer>
      <CiUser className="input-icon" />
      <InputForm
        id={elementId}
        type={type}
        defaultValue={initValue}
        ref={reference}
        placeholder={placeholder}
        minLength={3}
      />
    </PasswordContainer>
  );
}
