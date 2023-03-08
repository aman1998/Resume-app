import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import { getFullName } from '@utils/resumeUtils';

import styles from './header.module.scss';

const TemplateThree: FC = () => {
  const user = useSelector(userInfoSelector);

  return (
    <div className={styles.header}>
      <div className={styles['header__left']}>
        <p className={styles['header__fullname']}>
          {getFullName(
            user?.personal?.lastname,
            user?.personal?.firstname,
            user?.personal?.surname
          )}
        </p>
        <p className={styles['header__profession']}>
          {user?.speciality?.profession ? user.speciality.profession : 'Профессия'}
        </p>
      </div>
      <div className={styles['header__right']}>
        <p className={styles['header__location']}>{user?.personal?.location}</p>
        <p className={styles['header__email']}>{user?.contacts?.email}</p>
        {user?.contacts?.site && (
          <a
            href={user.contacts.site}
            className={styles['header__site']}
            target="_blank"
            rel="noreferrer"
          >
            {user.contacts.site}
          </a>
        )}
      </div>
    </div>
  );
};

export default TemplateThree;
