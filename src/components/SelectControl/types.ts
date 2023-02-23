import { SelectProps } from '@mui/material';

import { IControl } from '@common/types/controlTypes';

export interface IOptions {
  value: string | number;
  label: string | number;
}

export interface ISelectControlProps extends SelectProps, IControl {
  options: IOptions[];
}
