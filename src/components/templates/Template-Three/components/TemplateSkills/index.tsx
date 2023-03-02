import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import { specialityInfoSelector } from '@modules/UserInfo/store/selectors';

import styles from './skills.module.scss';

const TemplateSkills: FC = () => {
  const skills = useSelector(specialityInfoSelector)?.skills || [];

  return (
    <div className={styles.skills}>
      <div className={styles['skills__title']}>Технологии</div>
      <div className={styles['skills__list']}>
        {skills.length
          ? skills.map((item, index) => (
              // eslint-disable-next-line react/jsx-indent
              <Chip key={index} label={item.text} className={styles['skills__chip']} />
            ))
          : 'Не указано'}
      </div>
    </div>
  );
};

export default TemplateSkills;
