import { IStage } from '../types';

export interface ISocials {
  type: ESocialTypes;
  text: string;
}

export interface IContactsInfoStage {
  email: string;
  phone: string;
  socials: ISocials[];
  site: string;
}

export enum ESocialTypes {
  telegram = 'telegram',
  whatsapp = 'whatsapp',
  facebook = 'facebook',
  linkedin = 'linkedin',
  skype = 'skype',
}

export type TContactInfoStageProps = IStage<IContactsInfoStage>;
