import Link from 'next/link';
import { FC } from 'react';

import { links } from './constants';

const Navigation: FC = () => (
  <nav>
    <ul>
      {links.map((item) => (
        <li key={item.id}>
          <Link href={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
