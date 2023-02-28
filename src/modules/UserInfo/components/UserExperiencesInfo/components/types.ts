import { IExperiencesInfoStage } from '@components/Stages/ExperiencesStage/types';

export interface IExperienceItemProps {
  reset: (val: object) => void;
  item: IExperiencesInfoStage;
}
