import { IExperiencesInfoStage } from '@components/stages/ExperiencesStage/types';

export interface IExperienceItemProps {
  reset: (val: object) => void;
  item: IExperiencesInfoStage;
}
