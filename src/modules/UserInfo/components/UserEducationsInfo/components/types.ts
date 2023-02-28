import { IEducationsInfoStage } from '@components/Stages/EducationsInfoStage/types';

export interface IEducationItemProps {
  reset: (val: object) => void;
  item: IEducationsInfoStage;
}
