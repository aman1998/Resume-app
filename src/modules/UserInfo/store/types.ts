import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/stages/PersonalInfoStage/types';
import { IExperiencesInfoStage } from '@components/stages/ExperiencesStage/types';
import { IEducationsInfoStage } from '@components/stages/EducationsInfoStage/types';

export interface IUserInfoDefaultData {
  id: string;
  text: string;
}

export interface IAuthInfo {
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
  authInfo: TRequestHandler<IAuthInfo>;
  isAuth: boolean;
  experiencesModalIsOpen: boolean;
  educationsModalIsOpen: boolean;
}
