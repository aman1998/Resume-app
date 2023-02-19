import { Control, FieldErrors } from 'react-hook-form';

export interface IPersonalInfoStage {
  firstname: string;
  lastname: string;
}

export interface IPersonalStageProps {
  control: Control<IPersonalInfoStage>;
  errors?: FieldErrors<IPersonalInfoStage>;
}
