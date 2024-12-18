import { Dispatch, SetStateAction } from 'react';
import { Redirect, RLContainer } from './redirect.style';

export default function RegisterOrLogin({
  setRegisterOrLogin,
}: RegisterOrLogin) {
  return (
    <RLContainer>
      <Redirect onClick={() => setRegisterOrLogin('register')}>
        Registrar
      </Redirect>
      <span>|</span>
      <Redirect onClick={() => setRegisterOrLogin('login')}>Login</Redirect>
    </RLContainer>
  );
}

type RegisterOrLogin = {
  setRegisterOrLogin: Dispatch<SetStateAction<'login' | 'register'>>;
};
