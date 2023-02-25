import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';
import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';
import { IEducationsInfoStage } from '@components/Stages/EducationsInfoStage/types';

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IMainInfo {
  email: string;
  id: string;
}

export interface IUserInfo {
  id: string;
  contacts: IContactsInfoStage;
  personal: IPersonalInfoStage;
  speciality: ISpecialityInfoStage;
  experiences: IExperiencesInfoStage[];
  educations: IEducationsInfoStage[];
}

export interface IUserState {
  userInfo: TRequestHandler<IUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  authInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
  experiencesModalIsOpen: boolean;
  educationsModalIsOpen: boolean;
}
