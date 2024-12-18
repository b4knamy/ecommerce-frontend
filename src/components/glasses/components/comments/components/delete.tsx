import { useState } from 'react';
import DefaultWarningBody from './makecomment/warnings/defaultWarning';
import SucessfullyCommentCreatedWarning from './makecomment/warnings/commentCreatedWarning/createdwarning';
import useSettings from '../../../../../context/settingsContext/context';
import { AiOutlineDelete } from 'react-icons/ai';
export default function DeleteCommentOption({
  slug,
  token,
  commentId,
  deleteComment,
}: DeleteCommentOptionType) {
  const [openModal, setOpenModal] = useState(false);
  const [wasDeleted, setWasDeleted] = useState(false);
  const { api } = useSettings();

  const closeDeleteModal = () => setOpenModal(false);

  if (!openModal) {
    return (
      <div
        onClick={() => {
          setOpenModal(true);
        }}
        className="delete-post"
      >
        <AiOutlineDelete />
        <span>Excluir</span>
      </div>
    );
  }

  if (wasDeleted) {
    // TODO: CHANGE THE SUCCESS CONTAINER NAME
    return (
      <SucessfullyCommentCreatedWarning
        message="Comentário excluído com sucesso!"
        handler={() => deleteComment(commentId)}
      />
    );
  }

  const deleteCommentHandler = async () => {
    const response = await fetch(api.comments + `${slug}/${commentId}`, {
      headers: {
        Authorization: `Bearar ${token}`,
      },
      method: 'DELETE',
      credentials: 'include',
    });
    if (response.status === 204) {
      setWasDeleted(true);
    } else {
      closeDeleteModal();
    }
  };

  return (
    <DefaultWarningBody
      mode="warning"
      message="Tem certeza que deseja excluir sua avaliação?" // TODO: move to settings
      text="Não"
      secondaryText="Sim"
      handler={closeDeleteModal}
      secondaryHandler={deleteCommentHandler}
    ></DefaultWarningBody>
  );
}

type DeleteCommentOptionType = {
  slug: string;
  token: string;
  commentId: number;
  deleteComment: (id: number) => void;
};
