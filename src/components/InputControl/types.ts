import { Control } from 'react-hook-form';
import { InputProps } from '@mui/material';

export interface IInputControlProps extends InputProps {
  errorMessage?: string;
  labelText?: string;
  control: Control<any>;
}
