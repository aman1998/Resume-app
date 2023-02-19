import { FC } from 'react';
import Grid from '@mui/material/Grid';

import Header from '@components/Header';
import Navigation from '@components/Navigation';

import { ILayoutProps } from '../types';

const MainLayout: FC<ILayoutProps> = ({ children }) => (
  <Grid container spacing={2}>
    <Grid item xs={12} style={{ background: 'red' }}>
      <Header />
    </Grid>
    <Grid item xs={4} style={{ background: 'green', height: '100vh' }}>
      <Navigation />
    </Grid>
    <Grid item xs={8}>
      <main>{children}</main>
    </Grid>
  </Grid>
);

export default MainLayout;
