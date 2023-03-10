import { FC } from 'react';
import { useSelector } from 'react-redux';

import { educationsInfoSelector } from '@modules/UserInfo/store/selectors';

import { getIntervalYears } from '@utils/date';

import InfoItem from '../InfoItem';
import InfoHeader from '../InfoHeader';

import styles from './educations.module.scss';

const TemplateEducationsInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const educations = useSelector(educationsInfoSelector);

  return (
    <div>
      <InfoHeader title="Образование" withColors={withColors} />
      {!!educations?.length &&
        educations.map((item) => (
          <div key={item.id} className={styles['educations-item']}>
            <div className={styles['educations__circle']} />
            <div key={item.id}>
              <InfoItem title="Тип образования" text={item.type} />
              <InfoItem title="Учебное заведение" text={item.educationName} />
              <InfoItem title="Факультет" text={item.faculty} />
              <InfoItem
                title="Годы обучения"
                text={getIntervalYears(item.startYear, item.endYear)}
              />
            </div>
          </div>
        ))}
      {/* <InfoItem title="Гражданство" text={info?.nationality || 'Не указано'} /> */}
    </div>
  );
};

export default TemplateEducationsInfo;
