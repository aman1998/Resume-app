import { StandardTextFieldProps } from '@mui/material';
import { Control } from 'react-hook-form';

export interface IInputControlProps extends StandardTextFieldProps {
  control: Control<any>;
  labelText?: string;
  errorMessage?: string;
}
