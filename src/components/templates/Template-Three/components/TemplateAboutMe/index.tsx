import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import TemplateSimple from '../TemplateSimple';

const TemplateAboutMe: FC = () => {
  const user = useSelector(userInfoSelector);

  return <TemplateSimple title="Про себя" text={user?.personal?.aboutme || 'Не указано'} />;
};

export default TemplateAboutMe;
