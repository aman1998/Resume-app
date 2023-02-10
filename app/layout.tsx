import { Roboto } from '@next/font/google';

import Menu from './Menu';

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html>
    <head />
    <body className={font.className}>
      <Menu />
      {children}
    </body>
  </html>
);

export default RootLayout;
