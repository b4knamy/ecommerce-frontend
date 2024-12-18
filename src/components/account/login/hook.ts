import { useRef, useState } from 'react';
import { performUserLogin } from './api/login';
import useAuthContext from '../../../context/authContext/context/context';
import { LoginPayload } from '../../../context/authContext/actions/action.type';
import useSettings from '../../../context/settingsContext/context';

export default function useLoginForm(foreignSetterHandler: () => void) {
  const { api } = useSettings();
  const { actions } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [initValues, setInitValues] = useState({
    email: '',
    password: '',
  });
  const [warning, setWarning] = useState('');

  const loginHandler = async () => {
    const info = {
      urls: {
        login: api.token,
        csrf: api.csrf,
        user: api.get_user_data,
      },
      userInfo: {
        email: email.current?.value || '',
        password: password.current?.value || '',
      },
    };
    if (info.userInfo.email.length <= 0 || info.userInfo.password.length <= 0) {
      setWarning('Nenhum campo pode ficar vazio.');
      return;
    }
    setWarning('');
    setLoading(true);
    try {
      const data: LoginPayload | undefined = await performUserLogin(info);
      if (data) {
        actions.logIn({ user: data.user, token: data.token });
        foreignSetterHandler();
      } else {
        setWarning('Email ou senha incorreto.');
      }
    } finally {
      setLoading(false);
      setInitValues(info.userInfo);
    }
  };
  return {
    user: {
      email: email,
      password: password,
    },
    initValues,
    loginHandler,
    loading,
    warning,
  };
}
