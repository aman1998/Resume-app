import Link from 'next/link';
import { FC } from 'react';

const Menu: FC = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
