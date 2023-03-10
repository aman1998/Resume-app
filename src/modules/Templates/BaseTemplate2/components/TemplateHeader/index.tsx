import Image from 'next/image';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Chip } from '@mui/material';

import DefaultImage from '@common/images/default-image.jpg';

import { userInfoSelector } from '@modules/UserInfo/store/selectors';
import InfoItem from '@modules/Templates/Info/components/InfoItem';

import { getFullName, getSalaryInfo } from '@utils/resumeUtils';
import { getSocialSrc } from '@utils/imageUtils';

import styles from './header.module.scss';

const TemplateHeader: FC = () => {
  const user = useSelector(userInfoSelector);

  return (
    <div className={styles.header}>
      <Image
        src={user?.personal?.photoUrl || DefaultImage.src}
        width={250}
        height={250}
        alt="avatar"
      />
      <div className={styles['header__info']}>
        <h1 className={styles['header__fullname']}>
          {getFullName(user?.personal?.lastname, user?.personal.firstname, user?.personal?.surname)}
        </h1>
        <InfoItem title="Должность" text={user?.speciality?.profession} />
        <InfoItem
          title="Зарплата"
          text={getSalaryInfo(user?.speciality?.salary, user?.speciality?.salaryСurrency)}
        />
        <div className={styles['header__dotted']} />
        <InfoItem title="Почта" text={user?.contacts?.email} />
        <InfoItem title="Телефон" text={user?.contacts?.phone} />
        {!!user?.contacts?.socials.length &&
          user.contacts.socials.map((item) => (
            <div key={item.type} className={styles['info-item']}>
              <Image alt="social-icon" width={20} height={20} src={getSocialSrc(item.type)} />
              <div className={styles['info-item__text']}>{item.text}</div>
            </div>
          ))}
        <div className={styles['header__dotted']} />
        <InfoItem title="Полный день" text={user?.speciality?.isFullDay ? 'Да' : 'Нет'} />
        <InfoItem title="Переезд" text={user?.speciality?.relocatioReady ? 'Да' : 'Нет'} />
        <InfoItem
          title="Удаленная работа"
          text={user?.speciality?.remoteWorkingReady ? 'Да' : 'Нет'}
        />
        {user?.speciality?.skills?.length && (
          <div className={styles['header-skills']}>
            <div className={styles['header-skills__title']}>Навыки:</div>
            <div className={styles['header-skills__list']}>
              {user.speciality.skills.map((item, index) => (
                <Chip
                  key={index}
                  label={item.text}
                  size="small"
                  className={styles['skills__chip']}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateHeader;
