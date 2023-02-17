import { FC } from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import Header from '@components/Header';

import { ILayoutProps } from '../types';

const MainLayout: FC<ILayoutProps> = ({ children }) => (
  <Grid
    templateAreas={`"header header"
                "nav main"
                "nav main"`}
    gridTemplateRows={'50px 1fr 30px'}
    gridTemplateColumns={'150px 1fr'}
    h="100vh"
    color="blackAlpha.700"
    fontWeight="bold"
  >
    <GridItem pl="2" bg="orange.300" area={'header'}>
      <Header />
    </GridItem>
    <GridItem pl="2" bg="pink.300" area={'nav'}>
      Nav
    </GridItem>
    <GridItem pl="2" bg="green.300" area={'main'}>
      <main>{children}</main>
    </GridItem>
  </Grid>
);

export default MainLayout;
