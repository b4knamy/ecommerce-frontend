import { Dispatch, SetStateAction } from 'react';
import { UserRegisterType, WarningRegisterType } from './register.type';
import { LoginDataType } from '../../helpers/functions/api/api.type';
import {
  PASSWORD_MAXIMUM_LENGTH_REQUIRED_WARNING,
  PASSWORD_MUST_NOT_HAVE_SPACE_WARNING,
  PASSWORD_PATTERN_WARNING,
} from '../../../settings/account/warnings';

export function checkPasswordMinimumDigits(
  pwd: string,
  min?: number | undefined,
): boolean {
  return pwd.length < (min ? min : 8);
}

export function checkPasswordHaveSpace(pwd: string): boolean {
  return /\s/.test(pwd);
}

export function checkPatternPassword(pwd: string): boolean {
  return !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/.test(
    pwd,
  );
}

export function emailPatternChecker(email: string): string[] {
  const warnings = [];
  if (/\s/.test(email)) {
    warnings.push('Este campo não pode haver espaço.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    warnings.push('Insira um endereço de email válido.');
  }
  return warnings;
}

export function passwordPatternChecker(pwd: string): string[] {
  const warnings = [];

  if (checkPasswordMinimumDigits(pwd)) {
    warnings.push(PASSWORD_MAXIMUM_LENGTH_REQUIRED_WARNING);
  }
  if (checkPasswordHaveSpace(pwd)) {
    warnings.push(PASSWORD_MUST_NOT_HAVE_SPACE_WARNING);
  }
  if (checkPatternPassword(pwd)) {
    warnings.push(PASSWORD_PATTERN_WARNING);
  }

  return warnings;
}

export function repPasswordValidator(pwd1: string, pwd2: string): string[] {
  const warnings = [];
  if (pwd1 !== pwd2) {
    warnings.push('As senhas não batem, verifique novamente.');
  }
  return warnings;
}

export default function checkUserRegisterValidator(user: UserRegisterType) {
  let isValidatorOK = true;
  const validators: WarningRegisterType = {
    email: [],
    password: [],
    repPassword: [],
    fName: [],
  };
  const emailValidator = emailPatternChecker(user.email);
  const passwordValidator = passwordPatternChecker(user.password);
  const repPwdValidator = repPasswordValidator(user.password, user.repPassword);
  const fNameValidator =
    user.fName.length < 3 ? ['Esté campo deve ter mais de 2 caracteres.'] : [];

  if (
    emailValidator.length !== 0 ||
    passwordValidator.length !== 0 ||
    repPwdValidator.length !== 0 ||
    fNameValidator.length !== 0
  ) {
    validators.email = emailValidator;
    validators.password = passwordValidator;
    validators.repPassword = repPwdValidator;
    validators.fName = fNameValidator;

    isValidatorOK = false;
  }

  return {
    isValidated: isValidatorOK,
    warningsValidator: validators,
  };
}

export function checkUserLoginValidator(data: LoginDataType) {
  let isValidated = true;
  const { userInfo } = data;

  const validators: { email: string[]; password: string[] } = {
    email: [],
    password: [],
  };
  const emailValidator = emailPatternChecker(userInfo.email);
  const passwordValidator = passwordPatternChecker(userInfo.password);

  if (emailValidator.length !== 0 || passwordValidator.length !== 0) {
    validators.email = emailValidator;
    validators.password = passwordValidator;
    isValidated = false;
  }

  return {
    isValidated: isValidated,
    warningsValidator: validators,
  };
}

export function performWarningsFromApi(
  data: WarningRegisterType,
  setWarnings: Dispatch<SetStateAction<WarningRegisterType>>,
) {
  if (data?.email) {
    setWarnings((prev: WarningRegisterType) => {
      return { ...prev, email: data.email };
    });
  }

  if (data?.password) {
    setWarnings((prev: WarningRegisterType) => {
      return { ...prev, password: data.password };
    });
  }
}
