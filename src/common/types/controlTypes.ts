import { Control } from 'react-hook-form';

export interface IControl {
  errorMessage?: string;
  labelText?: string;
  control: Control<any>;
  name: string;
}

export interface ISkills {
  id: string;
  text: string;
}
