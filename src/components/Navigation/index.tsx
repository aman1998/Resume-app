import { MenuItem } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { links } from './constants';

const Navigation: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <ul>
        {links.map((item) => (
          <li key={item.id}>
            <MenuItem selected={pathname === item.link}>
              <Link href={item.link} style={{ width: '100%' }}>
                {item.title}
              </Link>
            </MenuItem>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
