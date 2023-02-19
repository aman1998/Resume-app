import { InputProps } from '@mui/material';
import { Control, FieldValues, Path } from 'react-hook-form';

export interface IInputControl<T extends FieldValues> extends InputProps {
  errorMessage?: string;
  labelText?: string;
  name: Path<T>;
  control: Control<T>;
}
