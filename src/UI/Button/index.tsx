import MUIButton from '@mui/material/Button';
import { FC } from 'react';

import { IButton } from './types';

const Button: FC<IButton> = ({ text, className = '', ...props }) => (
  <MUIButton className={className} {...props}>
    {text}
  </MUIButton>
);
export default Button;
