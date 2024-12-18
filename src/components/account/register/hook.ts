import { useRef, useState } from 'react';
import { WarningRegisterType } from './register.type';
import checkUserRegisterValidator, { performWarningsFromApi } from './helpers';
import createUser from './api/create';
import useSettings from '../../../context/settingsContext/context';

export default function useRegisterForm() {
  const { api } = useSettings();
  const [loading, setLoading] = useState(false);
  const fName = useRef<HTMLInputElement>(null);
  const lName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const repPassword = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    password: '',
    repPassword: '',
  });

  const [warnings, setWarnings] = useState<WarningRegisterType>({
    email: [],
    password: [],
    repPassword: [],
    fName: [],
  });
  const [isSignedIn, setIsSignedIn] = useState(false);

  const registerHandler = async () => {
    setLoading(true);
    setWarnings({
      email: [],
      password: [],
      repPassword: [],
      fName: [],
    });
    const userInfo = {
      fName: fName.current?.value || '',
      lName: lName.current?.value || '',
      email: email.current?.value || '',
      password: password.current?.value || '',
      repPassword: repPassword.current?.value || '',
    };
    setUser(userInfo);

    const { isValidated, warningsValidator } =
      checkUserRegisterValidator(userInfo);

    if (isValidated) {
      try {
        const urls = {
          create: api.create_user,
          csrf: api.csrf,
        };
        createUser({ urls, userInfo }).then(async (response) => {
          if (response) {
            const status = response.status;

            if (status === 201) {
              setIsSignedIn(true);
            } else if (status === 400) {
              performWarningsFromApi(await response.json(), setWarnings);
            }
          }
        });
      } finally {
        setLoading(false);
      }
    } else {
      setWarnings(warningsValidator);
      setLoading(false);
    }
  };
  return {
    initValues: user,
    user: {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      repPassword: repPassword,
    },
    warnings,
    loading,
    registerHandler,
    isSignedIn,
  };
}
