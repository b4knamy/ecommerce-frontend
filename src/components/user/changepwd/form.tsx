import { Dispatch, SetStateAction, useState } from 'react';
import { postChangePasswordArgs } from '../context/context.type';
import { ChangeForm, InputContainer } from './change.style';
import { ChangePwdMessageType } from './change';

export default function ChangePwdForm({
  postChangePassword,
  setMessage,
  setIsLoading,
}: ChangePwdFormProps) {
  const [code, setCode] = useState('');
  const [currentPwd, setCurrentPwd] = useState('');
  const [newPwd, setNewPwd] = useState('');

  return (
    <>
      <ChangeForm>
        <ChangePwdInput
          setter={setCurrentPwd}
          type="password"
          value={currentPwd}
          placeholder="Senha antiga"
        />
        <ChangePwdInput
          setter={setNewPwd}
          type="password"
          value={newPwd}
          placeholder="Nova senha"
        />
        <ChangePwdInput
          setter={setCode}
          type="text"
          value={code}
          placeholder="Codigo de verificação"
        />

        <button
          onClick={async () => {
            setIsLoading(true);
            const data: postChangePasswordArgs = {
              password: newPwd,
              current_password: currentPwd,
              reset_code: code,
            };
            const response = await postChangePassword(data);
            const result = await response.json();

            if (
              result.success ||
              result.password ||
              result.non_field_errors ||
              result.reset_code
            ) {
              setMessage(result);
            }

            setIsLoading(false);
          }}
        >
          Trocar senha
        </button>
      </ChangeForm>
      <div className="helper-text">
        <span>
          Verifique o código enviado ao seu email vinculado a está conta.
        </span>
      </div>
    </>
  );
}

type ChangePwdFormProps = {
  postChangePassword: (data: postChangePasswordArgs) => Promise<Response>;
  setMessage: Dispatch<SetStateAction<ChangePwdMessageType | null>>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const ChangePwdInput = ({
  setter,
  type,
  value,
  placeholder,
}: ChangePwdInputProps) => {
  return (
    <InputContainer>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          const val = e.target.value;
          if (type === 'text') {
            if (val.length <= 6) {
              setter(val);
            }
          } else {
            setter(val);
          }
        }}
      />
    </InputContainer>
  );
};

type ChangePwdInputProps = {
  setter: Dispatch<SetStateAction<string>>;
  type: string;
  value: string;
  placeholder: string;
};
