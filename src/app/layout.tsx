import { Roboto } from '@next/font/google';

import ChakraProvider from '@common/providers/ChakraProvider';

import '../common/styles/main.scss';

const font = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <html>
    <head />
    <body className={font.className}>
      <ChakraProvider>{children}</ChakraProvider>
    </body>
  </html>
);

export default RootLayout;
