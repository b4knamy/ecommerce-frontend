import { IoIosLogOut } from 'react-icons/io';
import { UserOnProps } from '../../../user';
import { SettingsOption, UserApresentation } from '../status.style';

export default function UserOnline({
  user,
  navigate,
  logOut,
  controls,
}: UserOnProps) {
  const navigateHandler = (page: string) => {
    navigate('/usuario/' + user.slug, { state: { page: page } });
    return controls.start('hidden');
  };

  return (
    <>
      <UserApresentation>
        <span>Olá, {user?.first_name}!</span>
      </UserApresentation>
      <SettingsOption onClick={() => navigateHandler('perfil')}>
        <span>Perfil</span>
      </SettingsOption>
      <SettingsOption onClick={() => navigateHandler('pedidos')}>
        <span>Pedidos</span>
      </SettingsOption>
      <SettingsOption onClick={() => navigateHandler('mudar-senha')}>
        <span>Trocar senha</span>
      </SettingsOption>

      <span onClick={() => logOut()} className="logout">
        <IoIosLogOut /> Sair
      </span>
    </>
  );
}
