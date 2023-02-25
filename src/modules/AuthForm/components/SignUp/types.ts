import { IEmailPassword } from './../../types';

export interface ISignUp extends IEmailPassword {
  confirm_password: string;
}
