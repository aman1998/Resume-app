import { FC } from 'react';
import { useSelector } from 'react-redux';

import { contactsInfoSelector } from '@modules/UserInfo/store/selectors';

import styles from './social.module.scss';

const TemplateSocialInfo: FC = () => {
  const contacts = useSelector(contactsInfoSelector);

  if (!contacts?.socials.length) return <></>;

  return (
    <div className={styles.social}>
      <div className={styles['social__title']}>Соцсети</div>
      <div className={styles['social__info-wrapper']}>
        {contacts.socials.map((item) => (
          <div key={item.type} className={styles['social-info']}>
            <div className={styles['social-info__title']}>{item.type}</div>
            <div>-</div>
            <div className={styles['social-info__text']}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSocialInfo;
