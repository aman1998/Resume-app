import { StandardTextFieldProps } from '@mui/material';

import { IControl } from '@common/types/controlTypes';

export interface IOptions {
  value: string | number;
  label: string;
}

export type ISelectControlProps = {
  options: IOptions[];
} & StandardTextFieldProps &
  IControl;
