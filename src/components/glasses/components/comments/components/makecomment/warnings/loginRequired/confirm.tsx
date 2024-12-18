import DefaultWarningBody from '../defaultWarning';
import { Dispatch, SetStateAction, useState } from 'react';
import { Auth } from '../../../../../../../account/partials/account';

export default function LoginRequiredWarning({
  setOpenCommentForm,
}: {
  setOpenCommentForm: Dispatch<SetStateAction<boolean>>;
}) {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return showLoginForm ? (
    <Auth
      foreignSetterHandler={() => {
        setOpenCommentForm(false);
        setShowLoginForm(false);
      }}
      mode="login"
    />
  ) : (
    <DefaultWarningBody
      handler={() => setOpenCommentForm(false)}
      secondaryHandler={() => setShowLoginForm(true)}
      text="Não"
      secondaryText="Sim"
      mode="warning"
      message="É necessário estar logado para enviar uma avaliação. Deseja fazer login?"
    />
  );
}

// NOTE: talvez seja necessário colocar o "/comment" no settings, importar e pegar o length, pra dinamificar.
