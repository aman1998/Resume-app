import Telegram from '../common/images/telegram.png';
import Whatsapp from '../common/images/whatsapp.png';
import Skype from '../common/images/skype.png';
import Facebook from '../common/images/facebook.png';
import Linkedin from '../common/images/linkedin.png';

import { ESocialTypes } from './../components/stages/ContactsInfoStage/types';

export const getSocialSrc = (type: ESocialTypes): string => {
  switch (type) {
    case 'telegram':
      return Telegram.src;
    case 'linkedin':
      return Linkedin.src;
    case 'facebook':
      return Facebook.src;
    case 'whatsapp':
      return Whatsapp.src;
    case 'skype':
      return Skype.src;
    default:
      return '';
  }
};
