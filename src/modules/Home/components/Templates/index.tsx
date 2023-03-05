import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';
import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import styles from './templates.module.scss';
import { templates } from './constants';

const Templates: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(authInfoFetchingSelector);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleAddClick = (link: string): void => {
    if (isAuth) push(link);
    else dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <section className={styles.templates}>
      <h2 className={styles['templates__title']}>Шаблоны</h2>
      <div className={styles['templates__list']}>
        {templates.map((item) => (
          <div
            key={item.id}
            className={styles.template}
            // style={{
            //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.image.src})`,
            //   backgroundRepeat: 'no-repeat',
            //   backgroundSize: 'cover',
            //   backgroundPosition: 'center',
            // }}
          >
            <div className={styles['template__linear-bg']} />
            <Image
              src={item.image.src}
              className={styles['template__image']}
              fill
              alt="template-image"
            />
            <Button
              className={styles['template__btn']}
              variant="contained"
              onClick={() => handleAddClick(item.link)}
              style={{ pointerEvents: loading ? 'none' : 'auto' }}
              text="Выбрать шаблон"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
