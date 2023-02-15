import { TRecordOf } from '@store/types';

export interface IAuthFormState {
  authModalIsOpen: boolean;
}

export type TAuthApplication = TRecordOf<IAuthFormState> | undefined;
export type TAuthStateProps = (Readonly<IAuthFormState> & TAuthApplication) | undefined;
