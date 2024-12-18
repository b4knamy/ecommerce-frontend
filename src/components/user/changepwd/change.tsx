import { useState } from 'react';
import { UserPageProps } from '../profile/profile';
import { ChangePasswordContainer } from './change.style';
import { useUserProfileContext } from '../context/context';
import GenerateResetCode from './generate';
import ChangePwdForm from './form';
import ChangePwdWarning from './warnings';
import DefaultWarningBody from '../../glasses/components/comments/components/makecomment/warnings/defaultWarning';
import Loading from '../../../animations/productsLoading/loading';
const UserChangePassword = ({ isCurrent }: UserPageProps) => {
  const { postResetCode, postChangePassword } = useUserProfileContext();
  const display = isCurrent ? 'flex' : 'none';
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<null | ChangePwdMessageType>(null);

  return (
    <ChangePasswordContainer $display={display}>
      {isLoading ? (
        <Loading />
      ) : showForm ? (
        <ChangePwdForm
          postChangePassword={postChangePassword}
          setMessage={setMessage}
          setIsLoading={setIsLoading}
        />
      ) : (
        <GenerateResetCode
          setShowForm={setShowForm}
          postResetCode={postResetCode}
        />
      )}
      {message &&
        (message.success ? (
          <DefaultWarningBody
            message={message.success}
            text="Ok"
            mode="success"
            handler={() => {
              setShowForm(false);
              setMessage(null);
            }}
          />
        ) : (
          <ChangePwdWarning message={message} setMessage={setMessage} />
        ))}
    </ChangePasswordContainer>
  );
};
export type ChangePwdMessageType = {
  password?: string[];
  non_field_errors?: string[];
  success?: string;
  reset_code?: string;
};
export default UserChangePassword;
