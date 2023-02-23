import { FieldErrors, Control, FieldValues } from 'react-hook-form';

export interface IStage<T extends FieldValues> {
  control: Control<T>;
  errors?: FieldErrors<T>;
}
