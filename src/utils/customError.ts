import { Dispatch, SetStateAction } from 'react';

export default class CustomError {
  status: number;
  message: string;

  constructor(
    status: number,
    message: string
  ) {
    this.status = status;
    this.message = message;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  applyWarning(setterError: Dispatch<SetStateAction<ErrorPatternType | null>>) {
    setterError(
      {
        status: this.status,
        message: this.message
      }
    )
  }
}

export type ErrorPatternType = {
  status?: number;
  message: string;
}
