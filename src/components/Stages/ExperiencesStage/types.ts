import { IStage } from '../types';

export interface IExperiencesInfoStage {
  companyName: string;
  profession: string;
  companyLocation: string;
  aboutWork: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  id: string;
}

export type TExperiencesInfoStageProps = IStage<IExperiencesInfoStage>;
