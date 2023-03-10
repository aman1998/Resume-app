import { FC } from 'react';
import { useSelector } from 'react-redux';

import { personalInfoSelector } from '@modules/UserInfo/store/selectors';

import { getGenderType } from '@utils/resumeUtils';

import InfoItem from '../InfoItem';
import InfoHeader from '../InfoHeader';

const TemplatePersonalInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const info = useSelector(personalInfoSelector);

  return (
    <div>
      <InfoHeader title="Личная информация" withColors={withColors} />
      <InfoItem title="Гражданство" text={info?.nationality} />
      <InfoItem title="Город" text={info?.location} />
      <InfoItem title="Дата рождения" text={info?.birthday} />
      <InfoItem title="Пол" text={info?.gender ? getGenderType(info.gender) : ''} />
    </div>
  );
};

export default TemplatePersonalInfo;
