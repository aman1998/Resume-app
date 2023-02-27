import { FC } from 'react';
import MUIModal from '@mui/material/Dialog';

import styles from './modal.module.scss';
import { IModal } from './types';

const Modal: FC<IModal> = ({ isOpen, onClose, children, fullScreen }) => (
  <MUIModal
    fullScreen={fullScreen}
    open={isOpen}
    onClose={onClose}
    fullWidth={true}
    style={{ borderRadius: 16 }}
    PaperProps={{
      style: {
        borderRadius: 16,
      },
    }}
  >
    <div className={styles.modal}>{children}</div>
  </MUIModal>
);

export default Modal;
