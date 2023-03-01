import { FC } from 'react';
import { useRouter } from 'next/router';

import Button from '@UI/Button';

import styles from './404.module.scss';

const NotFound: FC = () => {
  const { push } = useRouter();

  const goToHome = () => {
    push('/');
  };

  return (
    <div className={styles['not-found']}>
      <h1 className={styles['not-found__title']}>404</h1>
      <p className={styles['not-found__text']}>Страница не найдена</p>
      <Button
        className={styles['not-found__btn']}
        onClick={goToHome}
        variant="contained"
        text="На главную"
      />
    </div>
  );
};

export default NotFound;
