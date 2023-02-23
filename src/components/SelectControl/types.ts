import { SelectProps } from '@mui/material';

import { IControl } from '@common/types/controlTypes';

export interface IOptions {
  value: string;
  label: string;
}

export interface ISelectControlProps extends SelectProps, IControl {
  options: IOptions[];
}
