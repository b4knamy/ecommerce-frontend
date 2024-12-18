import RegisterOrLogin from '../components/redirects/redirect';
import AccountGreetings from '../components/welcome/greetings';

import { RLContainer, FormContainer } from './account.style';
import { useState } from 'react';
import { LoginForm } from '../login/login';
import { RegisterForm } from '../register/register';
import { IoMdClose } from 'react-icons/io';

export function Auth({ foreignSetterHandler, mode }: ForeignAuthProps) {
  const [registerOrLogin, setRegisterOrLogin] = useState(mode);
  return (
    <RLContainer>
      <FormContainer>
        <IoMdClose
          onClick={() => {
            foreignSetterHandler();
          }}
          className="close-session"
        />
        <AccountGreetings mode={registerOrLogin} />
        {registerOrLogin === 'login' ? (
          <LoginForm foreignSetterHandler={foreignSetterHandler} />
        ) : (
          <RegisterForm setRegisterOrLogin={setRegisterOrLogin} />
        )}
        <RegisterOrLogin setRegisterOrLogin={setRegisterOrLogin} />
      </FormContainer>
    </RLContainer>
  );
}

type ForeignAuthProps = {
  foreignSetterHandler: () => void;
  mode: 'login' | 'register';
};

export type ForeignFormProps = {
  foreignSetterHandler: () => void;
};
