import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ChangePwdMessageType } from './change';

export default function ChangePwdWarning({
  message,
  setMessage,
}: ChangePwdWarningProps) {
  const [closeMessage, setCloseMessage] = useState(false);

  useEffect(() => {
    const messageTimeout = setTimeout(() => {
      setCloseMessage(true);
      setMessage(null);
    }, 8000);

    return () => clearTimeout(messageTimeout);
  }, [message]);

  if (closeMessage) return null;

  const MessageWarning = () => {
    if (message.reset_code)
      return <span className="change-warning">{message.reset_code}</span>;
    if (message.non_field_errors) {
      return message.non_field_errors.map((text) => {
        return (
          <>
            <span className="change-warning">{text}</span> <br />
          </>
        );
      });
    }
    if (message.password) {
      return message.password.map((text) => {
        return (
          <>
            <span className="change-warning">{text}</span> <br />
          </>
        );
      });
    }
  };

  return (
    <div className="change-warning">
      <MessageWarning />
    </div>
  );
}

type ChangePwdWarningProps = {
  message: ChangePwdMessageType;
  setMessage: Dispatch<SetStateAction<ChangePwdMessageType | null>>;
};
