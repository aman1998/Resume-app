import { BaseTextFieldProps } from '@mui/material';
import { IControl } from '@common/types/controlTypes';
import { UseFieldArrayReturn } from 'react-hook-form';

export interface IText {
    id: string;
    text: string
 }

 export interface ITextUseField extends UseFieldArrayReturn {
    fields: IText[];
 }


export type TTextListControlProps = BaseTextFieldProps & IControl;
