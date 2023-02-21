import { Control, FieldErrors } from 'react-hook-form';

export interface IPersonalInfoStage {
  firstname: string;
  lastname: string;
  surname: string;
  gender: string;
  birthday: string;
  location: string;
  aboutme: string;
}

export interface IPersonalStageProps {
  control: Control<IPersonalInfoStage>;
  errors?: FieldErrors<IPersonalInfoStage>;
}
