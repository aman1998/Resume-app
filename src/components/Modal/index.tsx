import { FC } from 'react';
import MUIModal from '@mui/material/Dialog';

import styles from './modal.module.scss';
import { IModal } from './types';

const Modal: FC<IModal> = ({ isOpen, onClose, children }) => (
  <MUIModal open={isOpen} onClose={onClose} fullWidth={true}>
    <div className={styles.modal}>{children}</div>
  </MUIModal>
);

export default Modal;
