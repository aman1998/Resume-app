import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';
import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';

import Button from '@UI/Button';

import styles from './header.module.scss';

const HomeHeader: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(authInfoFetchingSelector);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleAddClick = () => {
    if (isAuth) push('/profile/personal');
    else dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <section className={styles['home-header']}>
      <p className={styles['home-header__subtitle']}>Онлайн-конструктор резюме</p>
      <h1 className={styles['home-header__title']}>Бесплатные резюме для поиска работы!</h1>
      <p className={styles['home-header__description']}>
        Используйте наши шаблоны резюме, чтобы подобрать наиболее лучший для себя вариант.
      </p>
      {/* <Button
        className={styles['home-header__btn']}
        text="Создать резюме"
        variant="contained"
        onClick={handleAddClick}
      /> */}
      <div className={styles['bg-content']}>
        <h2 className={styles['bg-content__text']}>
          Все делается максимально быстро и удобно, а главное абсолютно бесплатно!
        </h2>
        <Button
          className={styles['bg-content__btn']}
          style={{ pointerEvents: loading ? 'none' : 'auto' }}
          text="Создать резюме"
          variant="contained"
          onClick={handleAddClick}
        />
      </div>
    </section>
  );
};

export default HomeHeader;
