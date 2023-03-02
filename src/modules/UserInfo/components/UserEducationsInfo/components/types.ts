import { IEducationsInfoStage } from '@components/stages/EducationsInfoStage/types';

export interface IEducationItemProps {
  reset: (val: object) => void;
  item: IEducationsInfoStage;
}
