import { Input as ChakraInput, InputProps } from '@chakra-ui/react';
import { FC } from 'react';

const Input: FC<InputProps> = ({ ...props }) => <ChakraInput {...props} />;
export default Input;
