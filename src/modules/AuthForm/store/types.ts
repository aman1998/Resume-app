import { TRecordOf } from '@store/types';

export interface IAuthState {
  authModalIsOpen: boolean;
}

export type TAuthApplication = TRecordOf<IAuthState> | undefined;
export type TAuthStateProps = (Readonly<IAuthState> & TAuthApplication) | undefined;
