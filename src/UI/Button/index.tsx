import { CircularProgress } from '@mui/material';
import MUIButton from '@mui/material/Button';
import { FC } from 'react';

import styles from './styles.module.scss';
import { IButton } from './types';

const Button: FC<IButton> = ({ text, loading = false, ...props }) => (
  <MUIButton className={styles.button} {...props}>
    {loading && (
      <CircularProgress className={styles['button__circular-progress']} color="inherit" />
    )}
    <span>{text}</span>
  </MUIButton>
);
export default Button;
