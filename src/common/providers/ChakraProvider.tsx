'use client';

import React, { FC } from 'react';
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react';
import chakraTheme from '@chakra-ui/theme';

const { Button, Input } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Input,
  },
});

const ChakraProvider: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>
);

export default ChakraProvider;
