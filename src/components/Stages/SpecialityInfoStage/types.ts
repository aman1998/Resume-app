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
}

export type TSpecialityInfoStageProps = IStage<ISpecialityInfoStage>;
