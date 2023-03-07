import { ESocialTypes } from './../../../stages/ContactsInfoStage/types';

export interface ISocialChipProps {
  type: ESocialTypes;
  text: string;
  onDelete: () => void;
}
