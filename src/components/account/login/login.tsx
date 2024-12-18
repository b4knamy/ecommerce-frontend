import Loading from '../../../animations/productsLoading/loading';
import AccountInput from '../components/input/input';
import SubmitButton from '../components/submit/submit';
import { ForeignFormProps } from '../partials/account';
import useLoginForm from './hook';

export function LoginForm({ foreignSetterHandler }: ForeignFormProps) {
  const { user, loading, initValues, warning, loginHandler } =
    useLoginForm(foreignSetterHandler);

  return (
    <>
      <AccountInput
        placeholder="Email"
        elementId="email-id"
        type="email"
        label="Email"
        initValue={initValues.email}
        reference={user.email}
      />
      <AccountInput
        placeholder="Senha"
        elementId="password-id"
        type="password"
        label="Senha"
        initValue={initValues.password}
        reference={user.password}
      />
      <div className="auth-process">
        {warning && <span>{warning}</span>}
        {loading ? (
          <Loading init={2} finish={3} />
        ) : (
          <SubmitButton label="Fazer Login" handler={loginHandler} />
        )}
      </div>
    </>
  );
}
