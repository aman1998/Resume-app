import { FC } from 'react';
import { useSelector } from 'react-redux';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import TemplateSimple from '../TemplateSimple';

const TemplateNationality: FC = () => {
  const info = useSelector(personalInfoSelector);

  return <TemplateSimple title="Гражданство" text={info?.nationality || 'Не указано'} />;
};

export default TemplateNationality;
