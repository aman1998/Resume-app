import { Control, FieldValues } from 'react-hook-form';
import { InputProps } from '@chakra-ui/react';

export interface IInputControl<T extends FieldValues, N extends string> extends InputProps {
  errorMessage: string;
  labelText?: string;
  name: N;
  control: Control<T>;
}
