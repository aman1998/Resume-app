import { MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { links, templatesLinks } from './constants';

const Navigation: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        {links.map((item) => (
          <MenuItem key={item.id} selected={pathname === item.link}>
            <Link href={item.link} style={{ width: '100%' }}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </ul>
      <ul style={{ marginTop: 32 }}>
        {templatesLinks.map((item) => (
          <MenuItem key={item.id} selected={pathname === item.link}>
            <Link href={item.link} style={{ width: '100%' }}>
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
