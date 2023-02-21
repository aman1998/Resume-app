import { SelectProps } from '@mui/material';
import { Control } from 'react-hook-form';

export interface IOptions {
  value: string;
  label: string;
}

export interface ISelectControlProps extends SelectProps {
  control: Control<any>;
  options: IOptions[];
  errorMessage?: string;
}
