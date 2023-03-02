import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import TemplateSimple from '../TemplateSimple';

const TemplateBirdthday: FC = () => {
  const user = useSelector(userInfoSelector);

  return <TemplateSimple title="День рождения" text={user?.personal?.birthday || 'Не указано'} />;
};

export default TemplateBirdthday;
