import { UseFieldArrayReturn } from 'react-hook-form';

export interface ISocialContact {
  text: string;
  type: string;
}

export interface IText {
  id: string;
  text: string;
  type: string;
}

export interface ITextUseField extends UseFieldArrayReturn {
  fields: IText[];
}


