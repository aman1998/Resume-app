import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import styles from './about.module.scss';

const TemplateAboutMe: FC = () => {
  const user = useSelector(userInfoSelector);

  if (!user?.personal.aboutme) return <></>;

  return (
    <div className={styles.about}>
      <div className={styles['about__title']}>Про себя</div>
      <div className={styles['about__text']}>{user?.personal.aboutme}</div>
    </div>
  );
};

export default TemplateAboutMe;
