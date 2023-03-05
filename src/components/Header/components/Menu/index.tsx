import { FC } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';

import { auth } from 'firebase-config';

import { links, templatesLinks } from '@common/constants/app';

import { resetUserInfo } from '@modules/UserInfo/store/reducers';

import { ENotificationType, showNotification } from '@utils/notifications';

import styles from './menu.module.scss';
import { IHeaderMenuProps } from './types';

const HeaderMenu: FC<IHeaderMenuProps> = ({ open, setAnchorEl, anchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [signOut] = useSignOut(auth);

  const { push, pathname } = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    await signOut();
    push('/').finally(() => {
      setAnchorEl(null);
      dispatch(resetUserInfo());
      showNotification(ENotificationType.success, 'Вы успешно вышли из аккаунта!');
    });
  };

  const goTo = (url: string): void => {
    setAnchorEl(null);
    push(url);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
      className={styles.menu}
    >
      {pathname === '/' ? (
        <MenuItem onClick={() => goTo('/profile/personal')}>Профиль</MenuItem>
      ) : (
        <div className={styles['menu__links']}>
          <div className={styles['menu__info-links']}>
            {links.map((item) => (
              <MenuItem
                selected={pathname === item.link}
                key={item.link}
                onClick={() => goTo(item.link)}
              >
                {item.title}
              </MenuItem>
            ))}
          </div>
          <div className={styles['menu__template-links']}>
            {templatesLinks.map((item) => (
              <MenuItem
                selected={pathname === item.link}
                key={item.link}
                onClick={() => goTo(item.link)}
              >
                {item.title}
              </MenuItem>
            ))}
          </div>
        </div>
      )}
      <MenuItem onClick={logout}>Выйти</MenuItem>
    </Menu>
  );
};

export default HeaderMenu;
