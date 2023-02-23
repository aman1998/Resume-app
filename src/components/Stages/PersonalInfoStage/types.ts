import { IStage } from './../types';

export interface IPersonalInfoStage {
  firstname: string;
  lastname: string;
  surname: string;
  gender: string;
  birthday: string;
  location: string;
  aboutme: string;
}

export type TPersonalInfoProps = IStage<IPersonalInfoStage>;
