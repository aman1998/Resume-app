import { FC } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import classNames from 'classnames';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import { getSalaryType } from '@utils/resumeUtils';

import styles from './sidebar.module.scss';

const TemplateSidebar: FC<{ withColors: boolean }> = ({ withColors }) => {
  const user = useSelector(userInfoSelector);

  return (
    <div className={classNames(styles.sidebar, { [styles['sidebar--colors']]: withColors })}>
      {user?.personal?.photoUrl ? (
        <Image
          src={user.personal.photoUrl}
          width={withColors ? 220 : 210}
          height={withColors ? 220 : 210}
          alt="avatar"
        />
      ) : (
        <div
          className={classNames(styles['sidebar__not-image'], {
            [styles['sidebar__not-image--colors']]: withColors,
          })}
        />
      )}
      <div className={styles['sidebar__info']}>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Должность:</div>
          <div className={styles['info-item__text']}>{user?.speciality?.profession}</div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Зарплата:</div>
          <div className={styles['info-item__text']}>
            {user?.speciality?.salary}{' '}
            {user?.speciality?.salaryСurrency && getSalaryType(user.speciality.salaryСurrency)}
          </div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Телефон:</div>
          <div className={styles['info-item__text']}>{user?.contacts?.phone}</div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Почта:</div>
          <div className={styles['info-item__text']}>{user?.contacts?.email}</div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Переезд:</div>
          <div className={styles['info-item__text']}>
            {user?.speciality?.relocatioReady ? 'Да' : 'Нет'}
          </div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Удаленная работа:</div>
          <div className={styles['info-item__text']}>
            {user?.speciality?.remoteWorkingReady ? 'Да' : 'Нет'}
          </div>
        </div>
      </div>
      <div className={styles['sidebar-skills']}>
        <h2 className={styles['sidebar-skills__title']}>Навыки</h2>
        {user?.speciality?.skills?.length &&
          user.speciality.skills.map((item) => <p key={item.text}>- {item.text}</p>)}
      </div>
    </div>
  );
};

export default TemplateSidebar;
