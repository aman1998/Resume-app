import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';

export interface IMainInfo {
  email: string;
  id: string;
}

export interface IUserInfo {
  contacts: IContactsInfoStage;
  personal: IPersonalInfoStage;
  speciality: ISpecialityInfoStage;
}

export interface IUserState {
  userInfo: TRequestHandler<IUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
}
