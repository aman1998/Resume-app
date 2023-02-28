import { ISkills } from '@common/types/controlTypes';

import { IStage } from './../types';

export enum ECurrency {
  dollar = 'dollar',
  euro = 'euro',
  ruble = 'ruble',
}

export interface ISpecialityInfoStage {
  profession: string;
  salary: number;
  salaryСurrency: ECurrency;
  relocatioReady: boolean;
  remoteWorkingReady: boolean;
  skills: ISkills[];
}

export type TSpecialityInfoStageProps = IStage<ISpecialityInfoStage>;
