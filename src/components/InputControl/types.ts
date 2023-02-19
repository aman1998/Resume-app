import { Control, FieldValues, Path } from 'react-hook-form';
import { InputProps } from '@chakra-ui/react';

export interface IInputControl<T extends FieldValues> extends InputProps {
  errorMessage?: string;
  labelText?: string;
  name: Path<T>;
  control: Control<T>;
}
