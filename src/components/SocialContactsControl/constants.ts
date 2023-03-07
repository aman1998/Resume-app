import { ESocialTypes } from '@components/stages/ContactsInfoStage/types';

import { getSocialSrc } from './../../utils/imageUtils';
import { IOptions } from './../SelectControl/types';

export const socialOptions: IOptions[] = [
  {
    label: getSocialSrc(ESocialTypes.telegram),
    value: 'telegram',
  },
  {
    label: getSocialSrc(ESocialTypes.whatsapp),
    value: 'whatsapp',
  },
  {
    label: getSocialSrc(ESocialTypes.linkedin),
    value: 'linkedin',
  },
  {
    label: getSocialSrc(ESocialTypes.skype),
    value: 'skype',
  },
  {
    label: getSocialSrc(ESocialTypes.facebook),
    value: 'facebook',
  },
];
