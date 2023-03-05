import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { links } from '@common/constants/app';

import styles from './tabs.module.scss';

const TabsComponent: FC = () => {
  const { pathname, push } = useRouter();
  return (
    <Tabs
      value={pathname}
      variant="scrollable"
      scrollButtons="auto"
      aria-label="scrollable auto tabs example"
      className={styles.tabs}
    >
      {links.map((item) => (
        <Tab
          value={item.link}
          label={item.title}
          key={item.link}
          onClick={() => {
            push(item.link);
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
