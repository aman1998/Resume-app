/* eslint-disable react/jsx-indent */
import { FC } from 'react';
import { useSelector } from 'react-redux';

import { experiencesInfoSelector } from '@modules/UserInfo/store/selectors';

import { getIntervalDates } from '@utils/date';

import styles from './experiences.module.scss';

const TemplateExperience: FC = () => {
  const experiences = useSelector(experiencesInfoSelector) || [];

  return (
    <div className={styles.experience}>
      <div className={styles['experience__title']}>Опыт работы</div>
      <div className={styles['experience__infos']}>
        {experiences.length
          ? experiences.map((item) => (
              <div key={item.id} className={styles['experience__info']}>
                <div className={styles['experience__info-left']}>
                  <div className={styles['experience__name']}>{item.companyName}</div>
                  <div className={styles['experience__profession']}>{item.profession}</div>
                  <div className={styles['experience__location']}>{item.companyLocation}</div>
                  <div className={styles['experience__about']}>{item.aboutWork}</div>
                </div>
                <div className={styles['experience__right']}>
                  <div className={styles['experience__years']}>
                    {getIntervalDates(item.startMonth, item.startYear, item.endMonth, item.endYear)}
                  </div>
                </div>
              </div>
            ))
          : 'Не указано'}
      </div>
    </div>
  );
};

export default TemplateExperience;
