import { UseFormSetValue } from 'react-hook-form';

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
  nationality: string;
  photoUrl?: string;
  file: TNullable<File>;
}

export type TPersonalInfoProps = {
  setValue: UseFormSetValue<IPersonalInfoStage>;
} & IStage<IPersonalInfoStage>;
