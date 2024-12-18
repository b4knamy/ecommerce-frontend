import { Dispatch, SetStateAction, useState } from 'react';
import Loading from '../../../animations/productsLoading/loading';

export default function GenerateResetCode({
  setShowForm,
  postResetCode,
}: GenerateResetCodeProps) {
  const [isLoading, setIsLoading] = useState(false);

  const sendCode = async () => {
    setIsLoading(true);

    try {
      const response = await postResetCode();
      if (response.ok) {
        setShowForm(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: SHOW MESSAGE
  return (
    <div>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <button onClick={sendCode}>Gerar código</button>
      )}
    </div>
  );
}

type GenerateResetCodeProps = {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  postResetCode: () => Promise<Response>;
};
