import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getIntervalDates } from '@common/constants/date';

import InfoHeader from '@modules/Templates/MainTemplate/components/InfoHeader';
import { experiencesInfoSelector } from '@modules/UserInfo/store/selectors';

import InfoItem from '../InfoItem';

import styles from './experiences.module.scss';

const TemplateExperiencesInfo: FC<{ withColors: boolean }> = ({ withColors }) => {
  const experiences = useSelector(experiencesInfoSelector);

  return (
    <div className={styles.experiences}>
      <InfoHeader title="Работа" withColors={withColors} />
      {!!experiences?.length &&
        experiences.map((item) => (
          <div key={item.id} className={styles['experiences-item']}>
            <div className={styles['experiences__circle']} />
            <div>
              <InfoItem title="Должность" text={item.profession} />
              <InfoItem title="Компания" text={item.companyName} />
              <InfoItem title="Местоположение" text={item.companyName} />
              <InfoItem
                title="Годы работы"
                text={getIntervalDates(
                  item.startMonth,
                  item.startYear,
                  item.endMonth,
                  item.endYear
                )}
              />
              <InfoItem title="Про работу" text={item.aboutWork} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default TemplateExperiencesInfo;
