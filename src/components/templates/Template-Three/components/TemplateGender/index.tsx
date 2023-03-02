import { FC } from 'react';
import { useSelector } from 'react-redux';

import { personalInfoSelector, userInfoSelector } from '@modules/UserInfo/store/selectors';

import { getGenderType } from '@utils/resumeUtils';

import TemplateSimple from '../TemplateSimple';

const TemplateGender: FC = () => {
  const info = useSelector(personalInfoSelector);

  return (
    <TemplateSimple title="Пол" text={info?.gender ? getGenderType(info.gender) : 'Не указано'} />
  );
};

export default TemplateGender;
