import { ISkills } from '@common/types/controlTypes';

import { IStage } from '../types';

export enum EEducationTypes {
  higher = 'higher',
  college = 'college',
  technical = 'technical',
  courses = 'courses',
  others = 'others',
}

export interface IEducationsInfoStage {
  type: EEducationTypes;
  educationName: string;
  faculty: string;
  educationLocation: string;
  aboutEducation: string;
  startMonth: string;
  startYear: string;
  endMonth: string;
  endYear: string;
  id: string;
  skills: ISkills[];
}

export type TEducationsInfoStageProps = IStage<IEducationsInfoStage>;
