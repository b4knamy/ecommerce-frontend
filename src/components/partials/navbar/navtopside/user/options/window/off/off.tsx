import { UserOffProps } from '../../../user';
import { SettingsOption, UserApresentation } from '../status.style';
export default function UserOffline({ setOpenAuth }: UserOffProps) {
  return (
    <>
      <UserApresentation>
        <span>Você está offline no momento.</span>
      </UserApresentation>
      <SettingsOption
        onClick={() =>
          setOpenAuth({
            isOpen: true,
            mode: 'login',
          })
        }
      >
        <span>Login</span>
      </SettingsOption>
      <SettingsOption
        onClick={() =>
          setOpenAuth({
            isOpen: true,
            mode: 'register',
          })
        }
      >
        <span>Registrar</span>
      </SettingsOption>
    </>
  );
}
