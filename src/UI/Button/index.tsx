import { CircularProgress } from '@mui/material';
import MUIButton from '@mui/material/Button';
import { FC } from 'react';

import { IButton } from './types';

const Button: FC<IButton> = ({ text, className = '', loading = false, ...props }) => (
  <MUIButton className={className} variant="outlined" {...props}>
    {loading ? <CircularProgress /> : text}
  </MUIButton>
);
export default Button;
