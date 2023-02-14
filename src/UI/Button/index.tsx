import { Button as ChakraButton } from '@chakra-ui/react';
import { FC } from 'react';

import { IButton } from './types';

const Button: FC<IButton> = ({ text, className = '', ...props }) => (
  <ChakraButton className={className} {...props}>
    {text}
  </ChakraButton>
);
export default Button;
