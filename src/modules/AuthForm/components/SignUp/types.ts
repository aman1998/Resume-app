import { IEmailPassword } from '@modules/AuthForm/store/types';

export interface ISignUp extends IEmailPassword {
  confirm_password: string;
}
