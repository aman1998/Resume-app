import { TRequestHandler } from 'src/rootStore/types';

import { IPersonalInfoStage } from '@components/PersonalInfoStage/types';

export interface IMainInfo {
  email: string;
  id: string;
}

export type TUserInfo = IPersonalInfoStage;

export interface IUserState {
  userInfo: TRequestHandler<TUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
}
