import { TRecordOf, TRequestHandler } from '@store/types';

export interface IAuthState {
  authModalIsOpen: boolean;
  signIn: TRequestHandler<string>;
  signUp: TRequestHandler<string>;
}

export type TAuthApplication = TRecordOf<IAuthState> | undefined;
export type TAuthStateProps = (Readonly<IAuthState> & TAuthApplication) | undefined;
