import { FC } from 'react';
import { useSelector } from 'react-redux';

import { contactsInfoSelector } from '@modules/UserInfo/store/selectors';

import TemplateSimple from '../TemplateSimple';

const TemplatePhone: FC = () => {
  const info = useSelector(contactsInfoSelector);

  return <TemplateSimple title="Телефон" text={info?.phone || 'Не указано'} />;
};

export default TemplatePhone;
