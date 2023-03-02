import { IStage } from '../types';
export interface IContactsInfoStage {
  email: string;
  phone: string;
  messenger: string;
  site: string;
}

export type TContactInfoStageProps = IStage<IContactsInfoStage>;
