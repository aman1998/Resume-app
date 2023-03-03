import { FC } from 'react';
import { useSelector } from 'react-redux';

import InfoHeader from '@modules/Templates/MainTemplate/components/InfoHeader';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import { getGenderType } from '@utils/resumeUtils';

import InfoItem from '../InfoItem';

const TemplatePersonalInfo: FC = () => {
  const info = useSelector(personalInfoSelector);

  return (
    <div>
      <InfoHeader title="Личная информация" />
      <InfoItem title="Гражданство" text={info?.nationality || 'Не указано'} />
      <InfoItem title="Город" text={info?.location || 'Не указано'} />
      <InfoItem title="Дата рождения" text={info?.birthday || 'Не указано'} />
      <InfoItem title="Пол" text={info?.gender ? getGenderType(info.gender) : 'Не указано'} />
    </div>
  );
};

export default TemplatePersonalInfo;
