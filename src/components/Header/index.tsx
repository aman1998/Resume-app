import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@components/Logo';

import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';
import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';

import Button from '@UI/Button';

import styles from './header.module.scss';
import HeaderMenu from './components/Menu';

const Header: FC = () => {
  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(authInfoFetchingSelector);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(changeAuthModalIsOpen(true));
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header__container']}`}>
        <Logo />
        {isAuth && <HeaderMenu />}
        {!isAuth && !loading && <Button text="Войти" variant="outlined" onClick={handleAddClick} />}
      </div>
    </header>
  );
};

export default Header;
