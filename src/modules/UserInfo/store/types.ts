import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';
import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';

export interface IMainInfo {
  email: string;
  id: string;
}

export interface IExperiencesInfo extends IExperiencesInfoStage {
  id: string;
}

export interface IUserInfo {
  contacts: IContactsInfoStage;
  personal: IPersonalInfoStage;
  speciality: ISpecialityInfoStage;
  experiences: IExperiencesInfo[];
}

export interface IUserState {
  userInfo: TRequestHandler<IUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
  experiencesModalIsOpen: boolean;
}
