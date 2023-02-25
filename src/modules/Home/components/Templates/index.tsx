import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';
import { isAuthSelector } from '@modules/UserInfo/store/selectors';

import styles from './templates.module.scss';

const Templates: FC = () => {
  const isAuth = useSelector(isAuthSelector);

  const dispatch = useDispatch();
  const { push } = useRouter();

  const handleAddClick = () => {
    if (isAuth) push('/profile/personal');
    else dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <section>
      <h2 className={styles.templates}>Выбрать шаблон</h2>
    </section>
  );
};

export default Templates;
