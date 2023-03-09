import { IText } from '@components/SocialContactsControl/types';

export interface ITextListProps {
  errorMessage?: string;
  fields: IText[];
  handleRemove: (index: number) => void;
}
