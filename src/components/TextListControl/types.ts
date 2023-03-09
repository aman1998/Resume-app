import { BaseTextFieldProps } from '@mui/material';
import { UseFieldArrayReturn } from 'react-hook-form';

import { IControl } from '@common/types/controlTypes';

export interface IText {
  id: string;
  text: string;
}

export interface ITextUseField extends UseFieldArrayReturn {
  fields: IText[];
}

export type TTextListControlProps = BaseTextFieldProps & IControl;
