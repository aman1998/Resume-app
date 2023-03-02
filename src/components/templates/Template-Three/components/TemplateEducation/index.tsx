import { FC } from 'react';
import { useSelector } from 'react-redux';

import { educationsInfoSelector } from '@modules/UserInfo/store/selectors';

import styles from './education.module.scss';

const TemplateEducation: FC = () => {
  const educations = useSelector(educationsInfoSelector) || [];

  if (!educations.length) return <></>;

  return (
    <div className={styles.education}>
      <div className={styles['education__title']}>Образование</div>
      <div className={styles['education__infos']}>
        {educations.map((item) => (
          <div key={item.id} className={styles['education__info']}>
            <div className={styles['education__info-left']}>
              <div className={styles['education__name']}>{item.educationName}</div>
              <div className={styles['education__location']}>{item.educationLocation}</div>
            </div>
            <div className={styles['education__right']}>
              <div className={styles['education__faculty']}>{item.faculty}</div>
              <div className={styles['education__years']}>
                {item.startYear} - {item.endYear}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateEducation;
