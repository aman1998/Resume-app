import { IStage } from '../types';

export enum EEducationTypes {
  higher = 'higher',
  college = 'college',
  technical = 'technical',
  courses = 'courses',
  others = 'others',
}

export enum EEducationTypesRu {
  higher = 'Высшее образование',
  college = 'Колледж',
  technical = 'Техникум',
  courses = 'Курсы',
  others = 'другое',
}

export interface IEducationsInfoStage {
  type: EEducationTypes;
  educationName: string;
  faculty: string;
  educationLocation: string;
  aboutEducation: string;
  startYear: string;
  endYear: string;
  id: string;
}

export type TEducationsInfoStageProps = IStage<IEducationsInfoStage>;
