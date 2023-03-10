import { FC } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import classNames from 'classnames';

import DefaultImage from '@common/images/default-image.jpg';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';

import { getSalaryInfo } from '@utils/resumeUtils';
import { getSocialSrc } from '@utils/imageUtils';

import styles from './sidebar.module.scss';

const TemplateSidebar: FC<{ withColors: boolean }> = ({ withColors }) => {
  const user = useSelector(userInfoSelector);

  return (
    <div className={classNames(styles.sidebar, { [styles['sidebar--colors']]: withColors })}>
      <Image
        src={user?.personal?.photoUrl || DefaultImage.src}
        width={withColors ? 220 : 210}
        height={withColors ? 220 : 210}
        alt="avatar"
      />
      <div className={styles['sidebar__info']}>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Должность:</div>
          <div className={styles['info-item__text']}>{user?.speciality?.profession}</div>
        </div>
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Зарплата:</div>
          <div className={styles['info-item__text']}>
            {getSalaryInfo(user?.speciality?.salary, user?.speciality?.salaryСurrency)}
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
        {user?.contacts?.site && (
          <div className={styles['info-item']}>
            <div className={styles['info-item__title']}>Сайт:</div>
            <a
              href={user.contacts.site}
              className={styles['header__site']}
              target="_blank"
              rel="noreferrer"
            >
              {user.contacts.site}
            </a>
          </div>
        )}
        {!!user?.contacts?.socials.length &&
          user.contacts.socials.map((item) => (
            <div key={item.type}>
              {
                <div className={styles['info-item']}>
                  <div className={styles['info-item__title']}>
                    <Image src={getSocialSrc(item.type)} width={15} height={15} alt="social-icon" />
                    :
                  </div>
                  {/* <div className={styles['info-item__title']}>{item.type}:</div> */}
                  <div className={styles['info-item__text']}>{item.text}</div>
                </div>
              }
            </div>
          ))}
        <div className={styles['info-item']}>
          <div className={styles['info-item__title']}>Полный день:</div>
          <div className={styles['info-item__text']}>
            {user?.speciality?.isFullDay ? 'Да' : 'Нет'}
          </div>
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
