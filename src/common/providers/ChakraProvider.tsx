'use client';

import { FC } from 'react';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Button, Input, Modal } = chakraTheme.components;

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
    Modal,
  },
  colors,
});

const ChakraProvider: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);

export default ChakraProvider;
