import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getIntervalYears } from '@common/constants/date';

import InfoHeader from '@modules/Templates/MainTemplate/components/InfoHeader';
import { educationsInfoSelector } from '@modules/UserInfo/store/selectors';

import InfoItem from '../InfoItem';

const TemplateEducationsInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const educations = useSelector(educationsInfoSelector);

  return (
    <div>
      <InfoHeader title="Образование" withColors={withColors} />
      {!!educations?.length &&
        educations.map((item) => (
          <div key={item.id} style={{ marginBottom: 16 }}>
            <InfoItem title="Тип образования" text={item.type} />
            <InfoItem title="Учебное заведение" text={item.educationName} />
            <InfoItem title="Факультет" text={item.faculty} />
            <InfoItem title="Годы обучения" text={getIntervalYears(item.startYear, item.endYear)} />
          </div>
        ))}
      {/* <InfoItem title="Гражданство" text={info?.nationality || 'Не указано'} /> */}
    </div>
  );
};

export default TemplateEducationsInfo;
