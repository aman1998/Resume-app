import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import { getGenderType } from '@utils/resumeUtils';

import TemplateSimple from '../TemplateSimple';

const TemplateGender: FC = () => {
  const user = useSelector(userInfoSelector);

  if (!user?.personal.gender) return <></>;

  return <TemplateSimple title="Пол" text={getGenderType(user.personal.gender)} />;
};

export default TemplateGender;
