import { FC, useState, MouseEvent } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Menu, MenuItem, Avatar } from '@mui/material';

import { auth } from 'firebase-config';

import Logo from '@components/Logo';

import { authInfoFailureSelector, isAuthSelector } from '@modules/UserInfo/store/selectors';
import { resetUserInfo } from '@modules/UserInfo/store/reducers';
import { changeAuthModalIsOpen } from '@modules/AuthForm/store/reducers';

import Button from '@UI/Button';

import styles from './header.module.scss';

const Header: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAuth = useSelector(isAuthSelector);
  const authError = useSelector(authInfoFailureSelector);

  const [signOut] = useSignOut(auth);

  const { push } = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    await signOut();
    setAnchorEl(null);
    dispatch(resetUserInfo());
    push('/');
  };

  const goToProfile = () => {
    setAnchorEl(null);
    push('/profile/personal');
  };

  const handleAddClick = () => {
    dispatch(changeAuthModalIsOpen(true));
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
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={goToProfile}>Профиль</MenuItem>
              <MenuItem onClick={logout}>Выйти</MenuItem>
            </Menu>
          </>
        )}
        {!!authError && <Button text="Войти" variant="outlined" onClick={handleAddClick} />}
      </div>
    </header>
  );
};

export default Header;
