import { TRequestHandler } from 'src/rootStore/types';

import { IContactsInfoStage } from '@components/Stages/ContactsInfoStage/types';
import { ISpecialityInfoStage } from '@components/Stages/SpecialityInfoStage/types';
import { IPersonalInfoStage } from '@components/Stages/PersonalInfoStage/types';
import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';
import { IEducationsInfoStage } from '@components/Stages/EducationsInfoStage/types';

export interface IMainInfo {
  email: string;
  id: string;
}

export interface IUserInfo {
  contacts: IContactsInfoStage;
  personal: IPersonalInfoStage;
  speciality: ISpecialityInfoStage;
  experiences: IExperiencesInfoStage[];
  educations: IEducationsInfoStage[];
}

export interface IUserState {
  userInfo: TRequestHandler<IUserInfo>;
  updateUserInfo: TRequestHandler<unknown>;
  mainInfo: TRequestHandler<IMainInfo>;
  isAuth: boolean;
  experiencesModalIsOpen: boolean;
  educationsModalIsOpen: boolean;
}
