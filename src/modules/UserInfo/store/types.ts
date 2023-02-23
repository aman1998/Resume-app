import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';

export interface IMainInfo {
  email: string;
  id: string;
}

export type TUserInfo = IPersonalInfoStage & ISpecialityInfoStage & IContactsInfoStage;

export interface IUserState {
  userInfo: TRequestHandler<TUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
}
