import { ChangeEvent, useState } from 'react';
import { useUserProfileContext } from '../context/context';
import {
  FieldType,
  getObjectMessageRelated,
  getObjectNameRelated,
  ProfileMessageType,
  UserProfileFormType,
} from './helpers';

export default function useProfileHook() {
  const { data, postUpdateData, deleteUser } = useUserProfileContext();
  const [isDeleteConfirmed, setIsDeleteConfirmed] = useState(false);

  const { email, first_name, last_name, address, complement, zipcode, slug } =
    data;
  const [isEdit, setIsEdit] = useState(false);
  4;
  const [isSomethingChanged, setIsSomethingChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<ProfileMessageType>(null);
  const [updateInfo, setUpdateInfo] = useState<UserProfileFormType>({
    first_name: first_name,
    last_name: last_name,
    email: email,
    zipcode: zipcode || '',
    address: address || '',
    complement: complement || '',
  });
  const [currentData, setCurrentData] = useState<UserProfileFormType>({
    ...updateInfo,
    slug: slug,
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    limit: number,
    field: FieldType,
  ) => {
    if (!isSomethingChanged) {
      setIsSomethingChanged(true);
    }
    const value = e.target.value;

    if (value.length <= limit) {
      setUpdateInfo((prev) => {
        const updatedInfo = getObjectNameRelated(prev, field, value);
        return updatedInfo ? updatedInfo : prev;
      });

      if (
        field === 'zipcode' &&
        value.length === limit &&
        Number.isInteger(Number(value))
      ) {
        fetch(`https://viacep.com.br/ws/${value}/json/`).then(
          async (response) => {
            const data = await response.json();
            if (!data?.erro) {
              const { estado, localidade, logradouro } = data;
              setUpdateInfo((prev) => {
                return {
                  ...prev,
                  address: `${logradouro}, ${localidade}, ${estado}.`,
                };
              });
            }
          },
        );
      }
    }
  };

  const postUserData = async () => {
    if (isSomethingChanged) {
      const response = await postUpdateData(updateInfo, currentData.slug || '');
      const answer = await response.json();
      if (response.ok) {
        setCurrentData({ ...updateInfo, slug: answer.slug });
        setMessage({ success: 'Informações salvas com sucesso!' });
      } else {
        setMessage(getObjectMessageRelated(answer));
      }
      setIsSomethingChanged(false);
      setIsLoading(false);
    }
  };

  const deleteUserAccount = () => {
    deleteUser(currentData.slug || '');
  };

  return {
    isEdit,
    setIsEdit,
    updateInfo,
    currentData,
    onChangeHandler,
    postUserData,
    isLoading,
    message,
    setMessage,
    deleteUserAccount,
    isDeleteConfirmed,
    setIsDeleteConfirmed,
  };
}
