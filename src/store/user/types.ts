import { TRecordOf } from '@store/types';

export interface IAuthRequest {
  username: string;
  password: string;
}

export type TSignUpRequest = IAuthRequest;

export interface ISignUpSuccess {
  confirm_token: string;
}

export interface ISignUpState {
  fetching: boolean;
  data?: ISignUpSuccess;
  failure?: unknown;
}

export interface IUserState {
  signUp: ISignUpState;
}

export type TSelectUserApplication = TRecordOf<IUserState> | undefined;

export type TUserStateProps = (Readonly<IUserState> & TSelectUserApplication) | undefined;
