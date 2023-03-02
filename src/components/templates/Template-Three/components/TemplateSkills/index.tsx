import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { specialityInfoSelector } from '@modules/UserInfo/store/selectors';

import styles from './skills.module.scss';

const TemplateSkills: FC = () => {
  const skills = useSelector(specialityInfoSelector)?.skills || [];

  if (!skills.length) return <></>;

  return (
    <div className={styles.skills}>
      <div className={styles['skills__title']}>Технологии</div>
      <div className={styles['skills__list']}>
        {skills.map((item, index) => (
          <Chip key={index} label={item.text} className={styles['skills__chip']} />
        ))}
      </div>
    </div>
  );
};

export default TemplateSkills;
