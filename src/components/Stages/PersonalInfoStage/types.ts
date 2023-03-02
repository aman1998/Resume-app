import { TNullable } from '../../../rootStore/types';

import { IStage } from '../types';

export interface IPersonalInfoStage {
  firstname: string;
  lastname: string;
  surname: string;
  gender: string;
  birthday: string;
  location: string;
  aboutme: string;
  photoUrl?: string;
  file: TNullable<File>;
}

export type TPersonalInfoProps = {
  handleResetFile: () => void;
} & IStage<IPersonalInfoStage>;
