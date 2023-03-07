import { TRecordOf, TRequestHandler } from 'src/rootStore/types';

import { EAuthTypes } from './../types';

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IFirebaseAuth {
  user: {
    uid: string;
    email: string;
  };
}

export interface ISignOut {
  callback: () => void;
}

export interface IAuthState {
  signIn: TRequestHandler<unknown>;
  signUp: TRequestHandler<unknown>;
  signOut: TRequestHandler<unknown>;
  authModalIsOpen: boolean;
  authType: EAuthTypes;
}

export type TAuthApplication = TRecordOf<IAuthState> | undefined;
export type TAuthStateProps = (Readonly<IAuthState> & TAuthApplication) | undefined;
