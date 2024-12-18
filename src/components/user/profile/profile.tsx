import Loading from '../../../animations/productsLoading/loading';
import DefaultWarningBody from '../../glasses/components/comments/components/makecomment/warnings/defaultWarning';
import InputForm from '../inputs/input';
import useProfileHook from './hooks';
import { ProfileContainer } from './profile.style';
const UserProfile = ({ isCurrent }: UserPageProps) => {
  const display = isCurrent ? 'flex' : 'none';
  const {
    isEdit,
    setIsEdit,
    updateInfo,
    onChangeHandler,
    postUserData,
    isLoading,
    currentData,
    message,
    setMessage,
    deleteUserAccount,
    isDeleteConfirmed,
    setIsDeleteConfirmed,
  } = useProfileHook();

  return (
    <ProfileContainer $display={display}>
      <InputForm
        width="250px"
        height="40px"
        label="Nome"
        type="text"
        id="input-profile-name"
        isDisabled={!isEdit}
        value={isEdit ? updateInfo.first_name : currentData.first_name}
        limitValue={300}
        onChangeHandler={onChangeHandler}
        inputName="first_name"
        message={message?.first_name}
      ></InputForm>
      <InputForm
        width="250px"
        height="40px"
        label="Sobrenome"
        type="text"
        id="input-profile-last-name"
        isDisabled={!isEdit}
        value={isEdit ? updateInfo.last_name : currentData.last_name}
        limitValue={120}
        onChangeHandler={onChangeHandler}
        inputName="last_name"
        message={message?.last_name}
      ></InputForm>
      <InputForm
        width="250px"
        height="40px"
        type="email"
        label="Email"
        id="input-profile-email"
        value={isEdit ? updateInfo.email : currentData.email}
        isDisabled={!isEdit}
        limitValue={150}
        onChangeHandler={onChangeHandler}
        inputName="email"
        message={message?.email}
      ></InputForm>
      <InputForm
        width="100px"
        height="40px"
        type="text"
        label="CEP"
        value={isEdit ? updateInfo.zipcode : currentData.zipcode}
        id="input-profile-cep"
        isDisabled={!isEdit}
        limitValue={8}
        onChangeHandler={onChangeHandler}
        inputName="zipcode"
        message={message?.zipcode}
      ></InputForm>
      <InputForm
        width="400px"
        height="40px"
        type="text"
        label="Endereço"
        id="input-profile-address"
        value={isEdit ? updateInfo.address : currentData.address}
        isDisabled={!isEdit}
        limitValue={200}
        onChangeHandler={onChangeHandler}
        inputName="address"
        message={message?.address}
      ></InputForm>

      <InputForm
        width="400px"
        height="40px"
        type="text"
        value={isEdit ? updateInfo.complement : currentData.complement}
        label="Complemento"
        id="input-profile-complement"
        isDisabled={!isEdit}
        limitValue={100}
        onChangeHandler={onChangeHandler}
        inputName="complement"
        message={message?.complement}
      ></InputForm>

      <div className="form-details">
        <button onClick={() => setIsEdit(!isEdit)} content="edit-button">
          {isEdit ? 'Desativar Edição' : 'Editar'}
        </button>
        {isEdit &&
          (isLoading ? (
            <Loading />
          ) : (
            <button onClick={postUserData}>Salvar Informações</button>
          ))}

        {message?.success && (
          <DefaultWarningBody
            mode="success"
            message={message?.success}
            handler={() => setMessage(null)}
            text="Ok"
          ></DefaultWarningBody>
        )}
        <button onClick={() => setIsDeleteConfirmed(true)}>
          Excluir conta
        </button>
      </div>

      {isDeleteConfirmed && (
        <DefaultWarningBody
          text="Não"
          secondaryText="Sim"
          mode="warning"
          handler={() => {
            setIsDeleteConfirmed(false);
          }}
          secondaryHandler={() => {
            deleteUserAccount();
          }}
          message="Tem certeza de que deseja excluir sua conta?"
        />
      )}
    </ProfileContainer>
  );
};

export type UserPageProps = {
  isCurrent: boolean;
  slug?: string;
  token?: string;
};

export default UserProfile;
