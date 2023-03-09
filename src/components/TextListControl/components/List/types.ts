import { IText } from "@components/TextListControl/types";

export interface ITextListProps {
  errorMessage?: string;
  fields: IText[];
  handleRemove: (index: number) => void;
}
