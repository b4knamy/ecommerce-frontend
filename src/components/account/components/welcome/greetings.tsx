import { Welcome } from './greetings.style';

type props = {
  mode: 'login' | 'register';
};

export default function AccountGreetings({ mode }: props) {
  return (
    <Welcome>
      <span>{mode === 'login' ? 'Bem-vindo!' : 'Criar conta'}</span>
    </Welcome>
  );
}
