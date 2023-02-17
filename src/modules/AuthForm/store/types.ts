import { TRecordOf } from 'src/rootStore/types';

import { EAuthTypes } from './../types';

export interface IAuthState {
  authModalIsOpen: boolean;
  isAuth: boolean;
  authType: EAuthTypes;
}

export type TAuthApplication = TRecordOf<IAuthState> | undefined;
export type TAuthStateProps = (Readonly<IAuthState> & TAuthApplication) | undefined;
