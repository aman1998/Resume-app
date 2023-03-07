import { FC } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Menu, MenuItem } from '@mui/material';

import { links, templatesLinks } from '@common/constants/app';

import { signOutFetching } from '@modules/AuthForm/store/reducers';

import styles from './menu.module.scss';
import { IHeaderMenuProps } from './types';

const HeaderMenu: FC<IHeaderMenuProps> = ({ open, setAnchorEl, anchorEl }) => {
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { push, pathname } = useRouter();
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(signOutFetching({ callback: () => setAnchorEl(null) }));
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
