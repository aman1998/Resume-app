import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

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

  const handleAddClick = () => {
    if (isAuth) push('/profile/personal');
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
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${item.image.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <Button
              className={styles['template__btn']}
              variant="contained"
              onClick={handleAddClick}
              style={{ pointerEvents: loading ? 'none' : 'auto' }}
              text="Создать резюме"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Templates;
