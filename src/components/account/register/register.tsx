import AccountInput from '../components/input/input';
import SubmitButton from '../components/submit/submit';
import useRegisterForm from './hook';
import Loading from '../../../animations/productsLoading/loading';
import { Dispatch, SetStateAction } from 'react';
import DefaultWarningBody from '../../glasses/components/comments/components/makecomment/warnings/defaultWarning';

type RegisterFormProps = {
  setRegisterOrLogin: Dispatch<SetStateAction<'login' | 'register'>>;
};

export function RegisterForm({ setRegisterOrLogin }: RegisterFormProps) {
  const { user, loading, registerHandler, warnings, initValues, isSignedIn } =
    useRegisterForm();

  if (isSignedIn) {
    return (
      <DefaultWarningBody
        handler={() => setRegisterOrLogin('login')}
        text="Ok"
        message="Sua conta foi criada com sucesso!"
        mode="success"
      />
    );
  }
  return (
    <>
      <AccountInput
        placeholder="Nome"
        elementId="first-name"
        type="text"
        label="Nome"
        initValue={initValues.fName}
        reference={user.fName}
        warnings={warnings.fName}
      />
      <AccountInput
        placeholder="Sobrenome"
        elementId="last-name"
        type="text"
        initValue={initValues.lName}
        label="Sobrenome"
        reference={user.lName}
        warnings={[]}
      />
      <AccountInput
        placeholder="Email"
        elementId="email"
        type="email"
        initValue={initValues.email}
        label="Email"
        reference={user.email}
        warnings={warnings.email}
      />
      <AccountInput
        placeholder="Senha"
        elementId="password"
        type="password"
        label="Senha"
        initValue={initValues.password}
        reference={user.password}
        warnings={warnings.password}
      />

      <AccountInput
        placeholder="Repita a senha"
        elementId="repeat-password"
        type="password"
        initValue={initValues.repPassword}
        label="Repetir senha"
        reference={user.repPassword}
        warnings={warnings.repPassword}
      />

      <div className="auth-process">
        {loading ? (
          <Loading init={2} finish={3} />
        ) : (
          <SubmitButton label="Registrar" handler={registerHandler} />
        )}
      </div>
    </>
  );
}
