import { FC, MouseEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, IconButton } from '@mui/material';
import dynamic from 'next/dynamic';

import Logo from '@components/Logo';

import { authInfoFetchingSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';
import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';

import Button from '@UI/Button';

import styles from './header.module.scss';

const DynamicHeaderMenu = dynamic(() => import('./components/Menu'), {
  ssr: false,
});

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const isAuth = useSelector(isAuthSelector);
  const loading = useSelector(authInfoFetchingSelector);

  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(changeAuthModalIsOpen(true));
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles['header__container']}`}>
        <Logo />
        {isAuth && (
          <>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
            </IconButton>
            <DynamicHeaderMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
          </>
        )}
        {!isAuth && !loading && <Button text="Войти" variant="outlined" onClick={handleAddClick} />}
      </div>
    </header>
  );
};

export default Header;
